import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupQuestionPage from './src/pages/GroupQuestionPage/GroupQustionPage';
import { BrowserRouter } from 'react-router-dom';

// Mocks
global.fetch = jest.fn();
window.alert = jest.fn();
let originalLocation;

describe('GroupQuestionPage Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
    window.alert.mockClear();
    // Backup the original location
    originalLocation = window.location;

    // Define a mock location with a mock reload function
    delete window.location;
    window.location = { ...originalLocation, reload: jest.fn() };
    });

    afterAll(() => {
    // Restore the original location
    window.location = originalLocation;
  });

  it('renders without crashing', () => {
    render(<GroupQuestionPage />);
  });
  it('renders Questions Section', () => {
    const { getByText } = render(<GroupQuestionPage />);
    const section = getByText(/Questions Section/i);
    expect(section).toBeInTheDocument();
  });
  
  it('renders Post button', () => {
    const { getByText } = render(<GroupQuestionPage />);
    const button = getByText(/Post/i);
    expect(button).toBeInTheDocument();
  });
  
  it('calls fetch when component is rendered', () => {
    render(<GroupQuestionPage />);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('handles posting a question', async () => {
    // Mock the initial fetch call for loading questions
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ([]), // Assuming it returns an array of questions
    });
  
    // Mock the fetch call for posting a question
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Questions Posted Successfully' }),
    });
  
    render(<GroupQuestionPage />);
  
    // Wait for any initial loading to complete
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  
    fireEvent.change(screen.getByPlaceholderText(/enter title/i), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByPlaceholderText(/describe your question/i), { target: { value: 'Test Question Content' } });
    fireEvent.click(screen.getByText(/post/i));
  
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(window.alert).toHaveBeenCalledWith('Questions Posted Successfully');
    });
  });
  

    // Test initial fetch and rendering of questions
    it('fetches and renders questions on mount', async () => {
        const mockQuestions = [
          { _id: 'q1', title: 'Question 1', content: 'Content 1', answers: [] },
          // ... other mock questions ...
        ];
    
        fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => mockQuestions,
        });
    
        render(<GroupQuestionPage />);
    
        await waitFor(() => {
          expect(fetch).toHaveBeenCalledTimes(1);
          // Add more expectations to check if questions are rendered
        });
      });
    
      it('handles submitting an answer', async () => {
        const mockQuestions = [
          { _id: 'q1', title: 'Question 1', content: 'Content 1', answers: [] },
          // ...other questions...
        ];
      
        // Setup initial fetch response for questions
        fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => mockQuestions,
        });
      
        // Mock response for submitting an answer
        const mockUpdatedQuestion = { ...mockQuestions[0], answers: [{ content: 'New Answer' }] };
        fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => mockUpdatedQuestion,
        });
      
        render(<GroupQuestionPage />);
        await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
      
        // Open the modal for the first question
        const answerButtons = screen.getAllByText(/answer/i);
        fireEvent.click(answerButtons[0]); // Clicks the first 'Answer' button
      
        // Find the specific textarea within the modal
        const modalTextarea = screen.getByPlaceholderText("Enter the answer");
        fireEvent.change(modalTextarea, { target: { value: 'New Answer' } });
      
        fireEvent.click(screen.getByText(/submit answer/i));
        
        await waitFor(() => {
          expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
          expect(window.alert).toHaveBeenCalledWith('Answered the Question!');
        });
      
        expect(screen.queryByPlaceholderText("Enter the answer")).not.toBeInTheDocument();
      });      
});
