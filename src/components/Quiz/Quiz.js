import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizQustion =useLoaderData();
    console.log(quizQustion)
    return (
        <div>
            <h2>This is Quiz</h2>
        </div>
    );
};

export default Quiz;