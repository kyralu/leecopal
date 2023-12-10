import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import GroupPage from './pages/GroupPage/GroupPage';

function App() {
  
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const updateEmail = (email) => {
    setEmail(email);
  }

  return (
    <Router>
      <div className="App">
        <Navbar email={email}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLoggedIn={updateEmail}/>} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/group" element={<GroupPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

