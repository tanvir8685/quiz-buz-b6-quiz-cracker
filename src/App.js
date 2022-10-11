
import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    <div className="App">
      <Button variant="danger">Check</Button>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
