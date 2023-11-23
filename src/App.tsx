import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import NotFound from './pages/NotFound';
import Retirement from './pages/Retirement';
import Sidebar from './components/Sidebar';

/**
 * Component representing the overall layout of the application.
 */
const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

// Define the application's router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/retirement-plan',
        element: <Retirement />,
      },
    ],
  },
]);

/**
 * Main component representing the entire application.
 */
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
