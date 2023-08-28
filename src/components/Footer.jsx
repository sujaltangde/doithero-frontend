import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>

      <footer className="bg-gray-900 py-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm text-gray-500">
            &copy; 2023 DoItHero. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed and developed with <span className="text-red-500">&hearts;</span> by <Link to={"https://sujal-tangde.netlify.app"} className='underline font-bold'>Sujal Tangde</Link>.
          </p>
        </div>
      </footer>


    </>
  )
}
