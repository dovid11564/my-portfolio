import React from 'react';
import Profile from '../assets/profile/portfolio.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home'
            className='w-full h-screen bg-green'>

            {/* container */}
            <div className='w-full grid lg:grid-cols-2 place-items-center px-4 py-8'>
              <img src={Profile} alt='Profile of Dovid Edelkopf' className=' rounded-full w-64 lg:w-auto mt-12'/>  
            <div className="m-w-[1000px]">
                <p className="text-yellow">Hi, my name is</p>
                <h1 className='text-4xl sm:7xl font-bold text-[#ccd6f6]'>Dovid Edelkopf</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">Please check out my work!</p>
                <div>
                    <button className="text-yellow group border-2 px-6 py-3 my-2 flex items-center hover:text-green hover:bg-yellow hover:border-yellow">
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight />
                        </span>
                    </button>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Home