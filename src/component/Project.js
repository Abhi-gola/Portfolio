import React from 'react'
import food from '../assets/food.PNG'
import student from '../assets/student.PNG'
import Chatting from '../assets/chatting.jpg'
import PortFolio from '../assets/portfolio.PNG'

const Project = () => {
    const handlestudent = () => {
        window.open('https://github.com/Abhi-gola/Student-Portal', '_blank'); 
      };
    const handlefood = () => {
        window.open('https://github.com/Abhi-gola/Food-Delivery-App', '_blank'); 
      };
    const handlechat = () => {
        window.open('https://github.com/Abhi-gola/chatting_application', '_blank'); 
      };
    const handleportfolio = () => {
        window.open('https://github.com/Abhi-gola/Portfolio', '_blank'); 
      };
    return (
        <div name='project' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            <div className='mx-auto flex flex-col justify-center max-w-[1000px] h-full'>
                <div>
                    <p className='border-b-4 border-pink-600 inline fond-bold text-4xl'>Projects</p>
                    <p className='py-3'>There are some Project I have worked</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 text-center'>
                    <div onClick={handlefood} style={{ backgroundImage: `url(${food})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Food Delivery App
                            </span>
                        </div>
                    </div>
                    <div onClick={handlestudent} style={{ backgroundImage: `url(${student})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Student Portal
                            </span>
                        </div>
                    </div>

                    <div onClick={handlechat} style={{ backgroundImage: `url(${Chatting})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Chatting Application
                            </span>
                        </div>
                    </div>
                    <div onClick={handleportfolio} style={{ backgroundImage: `url(${PortFolio})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                My PortFolio
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project