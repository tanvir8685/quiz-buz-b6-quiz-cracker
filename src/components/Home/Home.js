import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import QuizSub from '../QuizSub/QuizSub';


const Home = () => {
    const loadquizSubject=useLoaderData();
    const quizSubjects=loadquizSubject.data;
    console.log(quizSubjects)

    return (
        <div>
            
            <div>
            <Card className="bg-dark text-white h-50">
      <Card.Img  src="https://image.shutterstock.com/image-vector/neon-quiz-sign-vector-design-600w-1722883588.jpg"  className='' alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='h-25 text-center fw-bold fs-1 mt-10 text-info' >Welcome to your Quiz</Card.Title>
        <Card.Text className='h-25 text-center fw-bold fs-1 mt-10 '>
          Choice your Subject wisely you have to serious in this 
        </Card.Text>
        <Card.Text  className='h-25 text-center fw-bold fs-1 mt-10'>Good Luck</Card.Text>
      </Card.ImgOverlay>
    </Card>
           
        </div>

            

            <div className='mt-5'>
                {
                    quizSubjects.map(quiz=><QuizSub
                    key={quiz.id}
                    quiz={quiz}></QuizSub>)
                }
            </div>


        </div>
    );
};

export default Home;