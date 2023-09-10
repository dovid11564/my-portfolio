import React from "react";


const About = () => {
    return (
        <div name='about' className="w-fill lg:h-96 lg:pt-[70px] bg-green text-yellow">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-yellow">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold ">
                        <p> Hi, I'm Dovid, nice to meet you, please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm at my best when I'm elbows deep in code. I love to get my hands on systems and sink my teeth into finding out what they are and how they work. I specialize in creating elegant code that gets the job done.</p>
                        {/* <p>In my previous career, I have over 7 years of experience working as a senior surf instructor/ ocean manager at the largest surf school on the East Coast. </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About