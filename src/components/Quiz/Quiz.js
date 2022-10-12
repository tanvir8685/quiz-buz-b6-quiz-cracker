import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';


const Quiz = () => {
    const loadQuizQustion=useLoaderData();
    const qustions=(loadQuizQustion.data.questions);
    console.log(qustions)
   
    
    return (
        <div>
            <h2>This is Quiz</h2>
            {
qustions.map(qustion=><QuizQuestion  key={qustion.id} qustion={qustion}></QuizQuestion>)
   }
        </div>
    );
};

export default Quiz;