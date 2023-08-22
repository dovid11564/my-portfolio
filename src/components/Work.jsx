import React from "react";
import RPG from '../assets/projects/VGImage.png';
const Work = () => {
    return (
        <div name='work' className="w:full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="m-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Work
                    </p>
                    <p className="py-6"> Check out some of my recent work!</p>
                </div>

                {/*  container*/}
                <div 
                    className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {/* grid item - copy this and change it for each project*/}
                    <div style={{ backgroundImage: `url(${RPG})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effetcs */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    {/* this should be a link to a demo */}
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    {/* this is a link to the repo */}
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work