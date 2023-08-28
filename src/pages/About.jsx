import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <>
      <div className='min-h-screen md:px-20 px-1 flex flex-col text-white justify-center items-center pt-5 bg-gradient-to-b from-blue-900 to-purple-500' >
        <div className='md:w-1/1 flex gap-3 md:px-0 px-6 py-14 flex-col'>

          <h1 className='text-5xl py-7 font-bold'>  About DoItHero </h1>

          <p className='text-xl font-bold' > Empowering Your Productivity </p>

          <p>DoItHero is a simple and intuitive task management app designed to empower individuals to be more productive and accomplish their goals. Our mission is to provide a streamlined solution that helps you stay organized, focused, and in control of your tasks. </p>

          <h3 className='text-lg font-bold'> Our Vision </h3>

          <p>We believe that everyone has the potential to achieve greatness in their daily lives. Our vision is to create a tool that simplifies task management and unlocks your productivity, allowing you to make the most of every day.</p>

          <p className='font-bold text-lg'>Key Features</p>

          <div >
            <p className='list-item'><span className='font-bold' >Easy Task Management</span> : Create, organize, and track your tasks effortlessly, ensuring nothing falls through the cracks. </p>

            <p className='list-item'><span className='font-bold' >Prioritize with Ease</span>: Set priorities and focus on what matters most, enabling you to make progress towards your goals.</p>

            <p className='list-item'><span className='font-bold' >Collaborate Seamlessly</span>: Collaborate with colleagues, friends, or family members, working together towards shared objectives.</p>

            <p className='list-item'><span className='font-bold' >Customize for You</span>: Tailor the app to your preferences, adapting it to match your unique workflow and productivity style.</p>
          </div>

          <p> <span className='font-bold text-xl '> <Link className='underline' to={'/register'} >Sign up</Link>   </span> for DoItHero today and unlock your productivity potential. Simplify your task management, accomplish more, and make each day a productive one.</p>
        </div>
      </div>
    </>
  )
}
