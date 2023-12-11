const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// import models
const User = require("./models/User");
const Question = require("./models/Question");
const Group = require("./models/Group");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: true }));
const bcrypt = require("bcrypt");
const saltRounds = 10;

// random emoji
const randomEmoji = require("random-emoji");

require("dotenv").config(); // For environment variables

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// express-session
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "no-one-will-know-this",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// cookie-parser
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  const { email, password, leetcodeId } = req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ email, password: hashedPassword, leetcodeId, groups: [],  acRecords: [] });
    console.log(newUser);
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error creating user", error: e.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);


    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    res
      .status(200)
      .json({
        message: "Login successful",
        email: user.email,
        id: user._id,
        leetcodeId: user.leetcodeId,
      });
  } catch (e) {
    res.status(500).json({ message: "Error logging in", error: e.message });
  }
});

app.post("/group/questions", async (req, res) => {
  const { title, content } = req.body;

  try {
    const newQuestion = new Question({
      title,
      content,
      answers: [],
    });

    await newQuestion.save();
    res.status(201).json({ message: "Question created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error creating question", e });
  }
});

app.get("/group/questions", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (e) {
    res.status(500).json({ message: "Error fetching questions", e });
  }
});

app.post("/group/questions/:questionId/answer", async (req, res) => {
  const { questionId } = req.params;
  const { answerContent } = req.body;

  try {
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.answers.push({ content: answerContent });
    await question.save();

    res.status(201).json({ message: "Answer added successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error saving answer" });
  }
});

/**
 * @route GET /group
 * @desc Get group data
 * @access Public
 */
app.post("/group", async (req, res) => {
  try {
    const { userId, groupName } = req.body;
    const groupIcon = randomEmoji.random({ count: 1 })[0].character;

    // check if groupName already exists
    const existingGroup = await Group.findOne({ groupName: groupName });
    if (existingGroup) {
      return res.status(409).json({ message: "Group already exists" });
    }

    const group = new Group({
      groupName,
      groupIcon: groupIcon,
      groupMembers: [userId],
      leetCodeData: [],
    });

    await group.save();
    res.status(201).json({ message: "Group created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error creating group", error: e.message });
  }
});

/**
 * @route GET /user
 * @desc Get user data
 * @access Public
 */
app.get("/groups", async (req, res) => {
  try {
    const groups = await Group.find({});
    res.json(groups);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error fetching groups", error: e.message });
  }
});

/**
 * @route GET /user
 * @desc Get user data
 * @access Public
 */
app.get("/group/:groupId", async (req, res) => {
  const { groupId } = req.params;

  try {
    const group = await Group.findById(groupId);
    res.json(group);
  } catch (e) {
    res.status(500).json({ message: "Error fetching group", error: e.message });
  }
});

/**
 * @route GET /user
 * @desc Adding user to group
 * @access Public
 */
app.post("/group/join", async (req, res) => {
  const { userId, groupId } = req.body;

  try {
    // Find the user and group by their IDs
    const user = await User.findById(userId);
    const group = await Group.findById(groupId);

    if (!user || !group) {
      return res.status(404).send("User or Group not found");
    }

    // Add the group to the user's groups if not already added
    if (!user.groups.includes(groupId)) {
      user.groups.push(groupId);
      await user.save();
    }

    // Add the user to the group's members if not already added
    if (!group.groupMembers.includes(userId)) {
      group.groupMembers.push(userId);
      await group.save();
    }

    res.status(200).send({ message: "User added to group successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Get users
 */
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: "Error fetching users", error: e.message });
  }
});

/**
 * Get user based on a list of userIds
 */
app.post("/users", async (req, res) => {
  const { userIds } = req.body;
  console.log(Array.isArray(userIds));

  try {
    const users = await User.find({ _id: { $in: userIds } });
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: "Error fetching users", error: e.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
