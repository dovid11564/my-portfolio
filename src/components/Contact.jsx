import React from "react";

const Contact = () => {

    return (
        <div name='contact' className="w-full h-screen bg-green flex justify-center items-center px-4 pt-16 bg-clip-padding lg:py-[450px] ">
            <form method="POST" action="https://getform.io/f/d5d28891-9ed4-48f5-ac64-7f4ac21177e5" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow text-yellow pt-16">Contact</p>
                    <p className="text-yellow py-4">Submit the form below to shoot me an email!</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name='name'></input>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder="Email" name='email'></input>
                <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
                <button className="text-yellow border-2 hover:text-green hover:bg-yellow hover:border-yellow px-4 py-3 my-8 mx-auto flex items-center ">Let's Connect!</button>
            </form>
        </div>
    )
}

export default Contact