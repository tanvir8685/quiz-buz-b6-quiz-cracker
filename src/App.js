

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

import Main from './layouts/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      
      element:<Main></Main>,
      
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/:quizId',
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          
          element:<Quiz></Quiz>
        },
        {
          path:'/chart',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Chart></Chart>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
        
      ]
     
    },
    {
      path:"*",element:<p>Enter valid link</p>
    }
  ])
  return (
    <div className="App" >
      
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
