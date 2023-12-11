import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import GroupPage from './pages/GroupPage/GroupPage';
import GroupDataDisplay from "./components/GroupDataDisplay/GroupDataDisplay";
import GroupInfoPage from "./pages/GroupInfoPage/GroupInfoPage";
import GroupQuestionPage from "./pages/GroupQuestionPage/GroupQustionPage";

function App() {
  const [leetcodeId, setLeetcodeId] = useState("");
  const [id, setId] = useState("");
  const [groups, setGroups] = useState([]);

  const handleLoggedIn = (leetcodeId, id) => {
    setLeetcodeId(leetcodeId);
    setId(id); 
    localStorage.setItem('userInfo', JSON.stringify({leetcodeId, id}));
  }

  const handleSignOut = () => {
    setLeetcodeId("");
    setId("");
    localStorage.removeItem('userInfo');
  };

  const handleCreateGroup = async (groupName) => {
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
      if(response.status === 409) {
        alert("Group already exists!");
        return;
      }
      // update groups
      fetchGroups();
    } catch (e) {
      console.log(e);
    }
  };

  const handleJoinGroup = async (groupId) => {
    if (!groupId) {
      alert("Please enter valid group id!");
      return;
    }
    if(!id) {
      alert("Please login first!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/group/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ userId: id, groupId }),
      });
      if(response.status === 409) {
        alert("Group already exists!");
        return;
      }
      // update groups
      fetchGroups();
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
      setGroups(data);
    } catch (e) {
      console.log(e);
    }
  };

  // fetchGroups when id is set in useEffect
  useEffect(() => {
    fetchGroups();
  }, [id]);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if(userInfo) {
      const {leetcodeId, id} = JSON.parse(userInfo);
      setLeetcodeId(leetcodeId);
      setId(id);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar leetcodeId={leetcodeId} onSignOut={handleSignOut} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<LoginPage onLoggedIn={handleLoggedIn} />}
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/group"
              element={<GroupPage groups={groups} id={id} onCreateGroup={handleCreateGroup}/>}
            />
            <Route path="/datadisplay" element={<GroupDataDisplay />} />
            <Route path="/group/:id" element={<GroupInfoPage  onJoinGroup={handleJoinGroup} />} />
            <Route path="/group/questions" element={<GroupQuestionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
