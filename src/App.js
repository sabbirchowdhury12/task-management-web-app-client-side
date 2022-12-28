import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />

    </div>
  );
}

export default App;
