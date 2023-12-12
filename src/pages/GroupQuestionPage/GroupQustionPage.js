import React, { useEffect, useState } from "react";


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
    <div>
      {showModal && (
        <div>
          <div>
            <input value={currentAnswer} onChange={handleAnswerChange} placeholder="Enter the answer"/>
          </div>
          <div>
            <button onClick={handleAnswerSubmit}>Submit Answer</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      <div>
        <form onSubmit={handleSubmit}>
        <div>{`Question Title:`}</div>
          <input
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              placeholder="Enter title"
          />
          <div>{`Question:`}</div>
          <input
            as="textarea"
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
            placeholder="Describe your question"
          />
          
          <button type="submit">Post</button>
        </form>
      </div>
      <div>
        <h2>Questions Section</h2>
        {questions.map((question, index) => (
          <div key={question._id}>
            <p>{question.content}</p>
            <div>
              <h3>Q{index + 1}: {question.title}</h3>
              <button onClick={() => handleAnswerClick(question._id)}>Answer</button>
            </div>
            <div>Answers:</div>
            <div>
              {question.answers && question.answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                  <p>{answer.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupQuestionPage;