import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/About',
        element: <AboutPage />
      },
      {
        path: '/Profile',
        element: <ProfilePage />
      },
      {
        path: '/ContactMe',
        element: <ContactMe />
      },      
      {
        path: '/Resume',
        element: <Resume />
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
