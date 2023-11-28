import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] w-full h-screen text-gray-50'>
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='grid grid-cols-2 max-w-[1000px] gap-8'>
            <div className=' pb-8 pl-4'>
                <p className='border-b-4 border-pink-500 text-4xl font-bold inline'>About</p>
            </div>
            <div></div>
        </div>
        <div className='sm:grid-cols-2 grid max-w-[1000px] w-full px-4 gap-8'>
            <div className='text-4xl sm:text-right font-bold'>
                <p>Hii!! Please take a look around</p>
            </div>
            <div>
               I am pursuing final year B.tech degree from IIITDM Jabalpur in Electronics and Communication Engineering Department and will be graduating in 2024. I am a Full Stack Web Developer. I have experience developing MERN stack-based applications from projects. I have good problem solving skills. I have solved around 700 DSA problem on LeetCode and GFG platforms . I am also well versed with deep learning and computer vision skills.
            </div>
        </div>
    </div>
    </div>
  )
}

export default About