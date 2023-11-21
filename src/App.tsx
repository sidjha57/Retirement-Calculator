import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Sidebar } from './components/Sidebar';
import { Retirement } from './pages/Retirement';
import { NotFound } from './pages/NotFound';
import "./App.css";

const Layout = () => {
  return (
    <div className='flex'>
       <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFound />
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/retirement-plan",
        element:<Retirement/>
      }
    ],
  }
]);

function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
