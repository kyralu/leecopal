import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const GroupQuestionPage1 = styled("div")({
  backgroundColor: `white`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100vw`,
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Frame1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `525px`,
  height: `708px`,
  left: `728px`,
  top: `150px`,
  overflow: `hidden`,
});

const PostButton = styled("button")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `10px`,
  width: `124px`,
  height: `65px`,
  left: `158px`,
  top: `503px`,
});

const QuestionInput = styled("input")({
  width: `310px`,
  height: `220px`,
  position: `absolute`,
  left: `86px`,
  top: `261px`,
});

const Question = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `black`,
  fontStyle: `normal`,
  fontFamily: `Inria Sans`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `196px`,
  height: `45px`,
  position: `absolute`,
  left: `86px`,
  top: `150px`,
});

const QuestionTitleInput = styled("input")({
  width: `310px`,
  height: `40px`,
  position: `absolute`,
  left: `85px`,
  top: `100px`,
});

const QuestionTitle = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `black`,
  fontStyle: `normal`,
  fontFamily: `Inria Sans`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `311px`,
  height: `45px`,
  position: `absolute`,
  left: `85px`,
  top: `40px`,
});

const QuestionsSection = styled("div")({
  position: "absolute",
  left: "100px",
  top: "50px",
  width: "600px",
  padding: "20px",
  maxHeight: "800px",
  overflowY: "auto"
});

const AnswerContainer = styled('div')({
  marginLeft: '20px'
});

const QuestionContainer = styled('div')({
  marginBottom: '50px',
});

const AnswerButton = styled("button")({
  display: `flex`,
  justifyContent: 'space-between'
});

const AnswersLabel = styled('div')({
  marginTop: '10px',
  fontWeight: 'bold'
});

const QuestionTitleRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px'
});

const ModalContainer = styled("div")({
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(200, 200, 200, 0.5)",
  padding: "20px",
  zIndex: 1000,
  width: "50%",
  maxWidth: "600px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
});

const ModalContent = styled("div")({
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
});

const ModalInput = styled("textarea")({
  width: "100%",
  height: "200px"
});

const ModalButtons = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "10px"
});


function GroupQuestionPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");

  const [questions, setQuestions] = useState([]);

  const resetForm = () => {
    setQuestionTitle("");
    setQuestionContent("");
  };

  const resetAnswerForm = () => {
    setShowModal(false);
  }

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch('http://localhost:3000/group/questions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (e) {
        console.log('Error fetching questions:', e);
      }
    }

      fetchQuestions();
  }, []);

  const handleAnswerClick = (questionId) => {
    setShowModal(true);
    setCurrentQuestionId(questionId);
  };

  const handleAnswerChange = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const handleAnswerSubmit = async() => {
    try {
      const response = await fetch(`http://localhost:3000/group/questions/${currentQuestionId}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answerContent: currentAnswer }),
      });

      if (!response.ok) {
        throw new Error('Failed to post answer');
      }

      const updatedQuestion = await response.json();

    // Check if the answers array exists and is an array
    if (updatedQuestion.answers && Array.isArray(updatedQuestion.answers)) {
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question._id === currentQuestionId
            ? { ...question, answers: updatedQuestion.answers }
            : question
        ),
      );
    }
      alert('Answered the Question!');
      resetAnswerForm();
      window.location.reload();
    } catch(e) {
      console.error('Failed to post answer:', e);
      alert('Failed to post answer');
    } finally {
      setShowModal(false);
      setCurrentAnswer('');
      setCurrentQuestionId(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const questionData = {
      title: questionTitle,
      content: questionContent,
    };

    try {
      const response = await fetch('http://localhost:3000/group/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionData),
      });

      if (!response.ok) {
        throw new Error('Failed to post questions');
      }

      alert('Questions Posted Successfully');
      resetForm();
      window.location.reload();
    } catch (e) {
      console.error('Failed to post questions:', e);
      alert('Failed to post questions');
    }
  }

  return (
    <GroupQuestionPage1>
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <ModalInput value={currentAnswer} onChange={handleAnswerChange} placeholder="Enter the answer"/>
          </ModalContent>
          <ModalButtons>
            <button onClick={handleAnswerSubmit}>Submit Answer</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </ModalButtons>
        </ModalContainer>
      )}
      <Frame1>
        <form onSubmit={handleSubmit}>
          <QuestionTitleInput 
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              placeholder="Enter title"
          />
          <QuestionTitle>{`Question Title:`}</QuestionTitle>
          <QuestionInput 
            as="textarea"
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
            placeholder="Describe your question"
          />
          <Question>{`Question:`}</Question>
          <PostButton type="submit">Post</PostButton>
        </form>
      </Frame1>
      <QuestionsSection>
        <h2>Questions Section</h2>
        {questions.map((question, index) => (
          <QuestionContainer key={question._id}>
            <QuestionTitleRow>
              <h3>Q{index + 1}: {question.title}</h3>
              <AnswerButton onClick={() => handleAnswerClick(question._id)}>Answer</AnswerButton>
            </QuestionTitleRow>
            <p>{question.content}</p>
            <AnswersLabel>Answers:</AnswersLabel>
            <div>
              {question.answers && question.answers.map((answer, answerIndex) => (
                <AnswerContainer key={answerIndex}>
                  <p>{answer.content}</p>
                </AnswerContainer>
              ))}
            </div>
          </QuestionContainer>
        ))}
      </QuestionsSection>
    </GroupQuestionPage1>
  );
}

export default GroupQuestionPage;