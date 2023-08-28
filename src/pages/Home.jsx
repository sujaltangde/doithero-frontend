import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


export const Home = () => {

  

    const dispatch = useDispatch()

   


    return (
        <>
            <div className='min-h-screen flex justify-center pt-20 bg-gradient-to-b from-blue-900 to-purple-500' >

                


                <div className=' flex flex-col  items-center  py-3 md:w-3/3 px-3 w-1/1 '>
                    <h1 className='text-center md:text-4xl text-3xl font-bold text-white' >Welcome to DoItHero - Empowering Your Productivity</h1>

                    <h4 className='text-xl py-3  underline font-bold text-white'>Unleash Your Inner Hero</h4>

                    <div className='py-3' > <Link to={'/login'} className='font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-3' >Set your todo's now</Link> </div>

                    <div className='text-center py-10 gap-5 flex flex-col text-white font-semibold'>
                        <div className='flex flex-row md:px-44 px-7'>
                            <div> <p className='font-bold text-xl md:px-11'>  Are you ready to take charge of your tasks and conquer your to-do list? Look no further! DoItHero is here to help you become the hero of your own productivity journey. </p>
                            </div>
                        </div>

                        <p className='font-bold'>&#11088; Achieve More, Stress Less &#11088; </p>
                       
                    </div>


                    <div className='flex flex-col md:px-56 px-10 text-white font-semibold'>

                        <h3 className='font-bold text-3xl py-4'> Features that Empower You </h3>
                        <ul className='list-disc flex flex-col gap-4 '>
                            <li className=' font-semibold'>Effortless Task Management: Stay organized and focused. Easily add, update, and track tasks, so you can stay on top of your priorities.</li>
                            <li className=' font-semibold'>Priority Planning: Make the most of your time and energy. Prioritize tasks and tackle them in order of importance, ensuring you're always making progress.</li>
                            <li className=' font-semibold'>Intuitive Task Organization: Keep your tasks organized effortlessly. Categorize, label, and group your tasks for a clear overview of your commitments.</li>
                            <li className=' font-semibold'>Progress Tracking: Monitor your progress with ease. Visualize your accomplishments and track your productivity over time, empowering you to stay motivated and focused.</li>
                        </ul>

                    </div>


                    <div className=' py-16 flex gap-4 flex-col md:px-56 px-8 text-white font-semibold'>
                        <h1 className='font-bold'>&#11088; Unleash Your Potential Today! &#11088; </h1>

                        <p> Become the productivity hero you've always wanted to be. DoItHero empowers you to stay organized, stay focused, and achieve more than you ever thought possible.</p>

                        <p> <span> <Link to={'/register'} className='font-bold underline text-xl' >Sign up</Link> </span> for DoItHero now and embark on your journey to productivity greatness!</p>

                    </div>


                </div>


            </div>
        </>
    )
}
