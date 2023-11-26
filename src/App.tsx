import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'
import NotFound from './pages/NotFound'
import Retirement from './pages/Retirement'
import Sidebar from './components/Sidebar'
import { Provider } from 'react-redux'
import { store } from './store'

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
  )
}

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
        path: '/home',
        element: <Home />,
      },
      {
        path: '/',
        element: <Retirement />,
      },
      {
        path: '/retirement-plan',
        element: <Retirement />,
      },
    ],
  },
])

/**
 * Main component representing the entire application.
 */
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
