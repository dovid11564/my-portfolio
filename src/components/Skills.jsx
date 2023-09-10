import React from "react";

import CSS from '../assets/skills/CSS.svg';
import HTML from '../assets/skills/HTML.svg';
import JavaScript from '../assets/skills/JavaScript.svg';
import ReactJS from '../assets/skills/React-Dark.svg'
import Python from '../assets/skills/Python-Dark.svg';
import Ruby from '../assets/skills/Ruby.svg';
import Git from '../assets/skills/Git.svg';
import PostGres from '../assets/skills/PostgreSQL-Dark.svg';

const Skills = () => {
    return (
        <div name='skills' className="w-full bg-green text-yellow py-16 lg:pt-[110px]">
            {/* countainer */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-yellow">
                        Skills
                    </p>
                    <p className="py-4">These are some of the technologies I am most familiar with. </p>
                </div>
                {/* font-bold? */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 text-center ">
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={HTML} alt='HTML Icon' />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={CSS} alt='CSS Icon' />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={JavaScript} alt='JavaScript Icon' />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={ReactJS} alt='React.js Icon' />
                        <p className="my-4">React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={Python} alt='Python Icon' />
                        <p className="my-4">Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={Ruby} alt='Ruby Icon' />
                        <p className="my-4">Ruby</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={Git} alt='Git Icon' />
                        <p className="my-4">Git</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-green'>
                        <img className='w-20 mx-auto pt-2' src={PostGres} alt='PostgreSQL Icon' />
                        <p className="my-4">PostgreSQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills