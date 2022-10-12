import React from 'react';

const QuizQuestion = ({qustion}) => {
    const{question}=qustion;
    return (
        <div>
            <h4>{question}</h4>
        </div>
    );
};

export default QuizQuestion;