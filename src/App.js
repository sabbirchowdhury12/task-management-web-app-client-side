import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router} >

      </RouterProvider>
    </div>
  );
}

export default App;
