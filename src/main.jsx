import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ChefCards from './components/ChefCard/ChefCards';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ChefDetails from './components/ChefDetails/ChefDetails';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import Blog from './components/Blog/Blog';
import AuthProvider from './provider/AuthProvider';

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
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
