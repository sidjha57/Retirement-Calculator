import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component representing the home page.
 */
const Home: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-gray-600">Explore the features and services we offer to make your experience exceptional</p>

        <Link to='/retirement-plan' >
          <p>Click here to visit our</p>
          <span className=" underline" >Retirement Planner</span>
        </Link>
      </div>
    </main>
  );
};

export default Home;
