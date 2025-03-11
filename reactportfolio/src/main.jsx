import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
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
  // Todo: Define the accessible routes, and which components respond to which URL
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
