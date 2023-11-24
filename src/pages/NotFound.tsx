import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Component to display when the requested page is not found.
 */
const NotFound: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="">This page is currently under development. Check back soon!</p>
        
        <Link to='/retirement-plan' >
          <p>Click here to visit our</p>
          <span className=" underline" >Retirement Planner</span>
        </Link>

      </div>
    </main>
  )
}

export default NotFound
