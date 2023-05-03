import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login/Login';
import Registration from './Login/Registration/Registration';
import ChefCards from './ChefCard/ChefCards';
import ChefDetails from './ChefDetails/ChefDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <ChefCards></ChefCards>,
        loader: () => fetch('http://localhost:5000/chef')
      },
      {
        path: '/chef/:id',
        element:<ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
