import React from 'react';

const QuizSub = ({quiz}) => {
    const{id,name,logo,total}=quiz;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default QuizSub;