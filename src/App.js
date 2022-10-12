

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
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
          path:'/quiz',
          
          element:<Quiz></Quiz>
        }
      ]

    }
  ])
  return (
    <div className="App" >
      
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
