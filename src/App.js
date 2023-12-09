import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionPage from './pages/group/question/QustionPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import GroupPage from './pages/GroupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/group" element={<GroupPage />} /> 
        <Route path="/group/questions" element={<QuestionPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

