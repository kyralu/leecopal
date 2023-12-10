import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import GroupPage from './pages/GroupPage/GroupPage';

function App() {
  
  const [leetcodeId, setLeetcodeId] = useState("");
  const [id, setId] = useState("");

  const updateIds = (leetcodeId, id) => {
    setLeetcodeId(leetcodeId);
    setId(id);
  }

  const handleSignOut = () => {
    setLeetcodeId("");
  }

  return (
    <Router>
      <div className="App">
        <Navbar leetcodeId={leetcodeId} onSignOut={handleSignOut}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLoggedIn={updateIds}/>} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/group" element={<GroupPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

