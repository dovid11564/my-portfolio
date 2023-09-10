import React from "react";
import RPG from '../assets/projects/VGImage.png';
import SURF from '../assets/projects/surfwatch.png';
import METRO from '../assets/projects/metroline.jpeg';
const Work = () => {
    return (
        // might be a good idea to change the text colors not from yellow if I keep this gradient in 
        <div name='work' className="w-full min-h-min text-yellow bg-green lg:px-44 pt-10 lg:pt-[110px] ">
            <div className="p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-yellow border-yellow">
                        Work
                    </p>
                    <p className="py-6"> Check out some of my recent work!</p>
                </div>

                {/*  container*/}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
                    {/* grid item - copy this and change it for each project*/}
                    <div style={{ backgroundImage: `url(${SURF})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:border-2 hover:border-yellow">
                        {/* hover effetcs */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-yellow tracking-wider border-b-2 border-yellow">
                                Surfwatch
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://exquisite-platypus-07e5f2.netlify.app"
                                target="_blank">
                                    {/* this should be a link to a demo */}
                                    <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-yellow text-yellow hover:bg-yellow hover:text-green">Link</button>
                                </a>
                                <a href="https://github.com/dovid11564/surfwatch"
                                target="_blank">
                                    {/* this is a link to the repo */}
                                    <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-yellow text-yellow hover:bg-yellow hover:text-green">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${METRO})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:border-2 hover:border-yellow">
                        {/* hover effetcs */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-yellow tracking-wider border-b-2 border-yellow">
                                MetroLine
                            </span>
                            <div className="pt-8 text-center">
                                {/* <a href="/">
                                    {/* this should be a link to a demo 
                                    <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-yellow text-yellow hover:bg-yellow hover:text-green">Demo</button>
                                </a> */}
                                <a href="https://github.com/dovid11564/train-project-phase-2"
                                target="_blank">
                                    {/* this is a link to the repo */}
                                    <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-yellow text-yellow hover:bg-yellow hover:text-green">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${RPG})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:border-2 hover:border-yellow">
                        {/* hover effetcs */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-yellow tracking-wider border-b-2 border-yellow">
                                A Chassidishe RPG
                            </span>
                            <div className="pt-8 text-center">
                                {/* <a href="/">
                                    {/* this should be a link to a demo 
                                    <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-yellow text-yellow hover:bg-yellow hover:text-green">Demo</button>
                                </a> */}
                                <a href="https://github.com/dovid11564/RPG"
                                target="_blank"
                                >
                                    {/* this is a link to the repo */}
                                    <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-yellow text-yellow hover:bg-yellow hover:text-green">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* previous work experience */}
                <div></div>
            </div>
        </div>
    )
}

export default Work