import React from 'react';
import Options from '../Options/Options';

const QuizQuestion = ({qustion}) => {
    
    const{question}=qustion;
    const qustionOptions=qustion.options;
    // console.log(qustionOptions)
    return (
        <div>
            <h4>{question}</h4>
            {
                qustionOptions.map(options=><Options options={options}></Options>)
            }

            
        </div>
    );
};

export default QuizQuestion;