import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import GroupPage from './pages/GroupPage/GroupPage';
import GroupDataDisplay from "./components/GroupDataDisplay/GroupDataDisplay";

function App() {
  const [leetcodeId, setLeetcodeId] = useState("");
  const [id, setId] = useState("");

  const updateIds = (leetcodeId, id) => {
    setLeetcodeId(leetcodeId);
    setId(id);
  };

  const handleSignOut = () => {
    setLeetcodeId("");
  };

  const handleCreateGroup = async (groupName) => {
    console.log("create group", groupName);
    if (!groupName) {
      alert("Please enter valid group name!");
      return;
    }
    if (!id) {
      alert("Please login first!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: id, groupName }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await fetch("http://localhost:3000/groups", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  // fetchGroups when id is set in useEffect
  useEffect(() => {
    fetchGroups();
  }, [id]);

  return (
    <Router>
      <div className="App">
        <Navbar leetcodeId={leetcodeId} onSignOut={handleSignOut} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<LoginPage onLoggedIn={updateIds} />}
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/group"
              element={<GroupPage onCreateGroup={handleCreateGroup} />}
            />
            <Route path="/datadisplay" element={<GroupDataDisplay />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
