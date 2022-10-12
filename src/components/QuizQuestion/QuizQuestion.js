import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faEye} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Options from '../Options/Options';

const QuizQuestion = ({qustion}) => {
    console.log(qustion.correctAnswer)
    const[correct,setCorrect]=useState();
    const correctbtn=(id)=>{
        console.log('clicked',id)
        setCorrect(qustion.correctAnswer)
    }
    
    const{question}=qustion;
    const qustionOptions=qustion.options;
    // console.log(qustionOptions)
    return (
        <div>
            <h4>{question}</h4> <Button onClick={()=>correctbtn(qustion.id)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Button>
            
            {
                qustionOptions.map((options,id)=><Options key={id} qustion={qustion} options={options}></Options>)
            }

            <h3>Correct Answer:{correct}</h3>
        </div>
    );
};

export default QuizQuestion;