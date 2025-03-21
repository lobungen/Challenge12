// Todo: Bring in the required import from 'react-router-dom'
import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import './app.css';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
