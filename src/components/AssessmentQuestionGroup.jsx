import React from 'react';
import '../css/Opportunities.css';

function AssessmentQuestionGroup({ questions, answers, onAnswer, onNext, onBack, showBack, showNext }) {
  return (
    <div className="assessment-group-card">
      <div className="assessment-title">Readiness Assessment</div>
      <div className="assessment-desc">Answer the following questions to determine your company's readiness for international expansion.</div>
      <div className="assessment-section-title">International Trade Operations</div>
      <div className="assessment-questions-box">
        {questions.map((q, idx) => (
          <div key={q.id} className="assessment-question-block">
            <div className="assessment-question-text"><span className="assessment-question-id">{q.id}.</span> {q.text}</div>
            <div className="assessment-radio-group">
              <label className="assessment-radio-label">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  checked={answers[q.id] === 'yes'}
                  onChange={() => onAnswer(q.id, 'yes')}
                />
                Yes
              </label>
              <label className="assessment-radio-label">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  checked={answers[q.id] === 'no'}
                  onChange={() => onAnswer(q.id, 'no')}
                />
                No
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="assessment-nav-btns-bottom">
        {showBack && <button className="assessment-back-btn" onClick={onBack}>Back</button>}
        <div style={{ flex: 1 }} />
        {showNext && <button className="assessment-next-btn" onClick={onNext}>Next</button>}
      </div>
    </div>
  );
}

export default AssessmentQuestionGroup; 