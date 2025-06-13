import React, { useState } from 'react';
import '../css/App.css';
import '../css/Navbar.css';
import AssessmentQuestionGroup from '../components/AssessmentQuestionGroup';

const allQuestions = [
  { id: 9, text: 'Will your company ensure that export sales orders will be processed with the same expediency of domestic sales orders?' },
  { id: 10, text: 'Will your company give its foreign representatives and customers the same attention and level of service given to domestic representatives and customers?' },
  { id: 11, text: 'Will your company appoint someone internally to develop export sales?' },
  { id: 12, text: 'Does your company have sufficient production capacity that can be committed to the export market over the long-term?' },
  { id: 13, text: 'Is your company willing to modify product packaging and ingredients to meet foreign import regulations, food safety standards and cultural preferences?' },
  { id: 14, text: 'Does your company have a staff member who can handle export documentation?' },
  { id: 15, text: 'Is your firm prepared to look carefully at the impact that business operations will have on those who are located in the foreign jurisdiction of interest?' },
  // Add more questions as needed
];

const QUESTIONS_PER_PAGE = 7;

function ReadinessAssesment() {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState({});

  const startIdx = page * QUESTIONS_PER_PAGE;
  const endIdx = startIdx + QUESTIONS_PER_PAGE;
  const questions = allQuestions.slice(startIdx, endIdx);

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <AssessmentQuestionGroup
      questions={questions}
      answers={answers}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onBack={handleBack}
      showBack={page > 0}
      showNext={endIdx < allQuestions.length}
    />
  );
}

export default ReadinessAssesment;