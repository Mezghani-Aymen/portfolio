import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="md:flex w-full container mx-auto rounded-lg pt-[6rem] p-6 " id='contact'>
            <div className="flex-1 md:border-r md:border-b-0 border-b mb-5 pb-6 border-accentColor md:pr-5 md:mr-5" data-aos="fade-right">
                <h2 className="text-3xl font-semibold text-[#D76B30]" >Connect with me:</h2>
                <p className="text-[#A3C4E0]">Satisfied with me? Please contact me</p>
                <div className="flex mt-4">
                    <a href="#" className="mr-2">
                        <img src="" alt="" className="w-8" />
                    </a>
                    <a href="#" className="mr-2">
                        <img src="linkedin-logo.png" alt="LinkedIn" className="w-8" />
                    </a>
                    <a href="sms:+1234567890">
                        <img src="sms-logo.png" alt="SMS" className="w-8" />
                    </a>
                </div>

            </div>
            <div className="flex-1 " data-aos="fade-left">
                <h2 className="text-lg font-semibold text-[#A3C4E0]">Contact me, let's make magic together</h2>
                <form className="mt-4 flex flex-col">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-[#F5E5D5]">Name</label>
                        <input type="text" id="name" placeholder="Your Name"
                            className="w-full p-2 mt-1 bg-transparent border border-[#D76B30] text-[#F5E5D5] rounded focus:outline-none focus:ring-2 focus:ring-[#D76B30]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#F5E5D5]">Email</label>
                        <input type="email" id="email" placeholder="Your Email"
                            className="w-full p-2 mt-1 bg-transparent border border-[#D76B30] text-[#F5E5D5] rounded focus:outline-none focus:ring-2 focus:ring-[#D76B30]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subjet" className="block text-[#F5E5D5]">Subject</label>
                        <input type="text" id="subjet" placeholder="Your Subjet"
                            className="w-full p-2 mt-1 bg-transparent border border-[#D76B30] text-[#F5E5D5] rounded focus:outline-none focus:ring-2 focus:ring-[#D76B30]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-[#F5E5D5]">Message</label>
                        <textarea id="message" rows={4} placeholder="Your Message"
                            className="w-full p-2 mt-1 bg-transparent border border-[#D76B30] text-[#F5E5D5] rounded focus:outline-none focus:ring-2 focus:ring-[#D76B30]"></textarea>
                    </div>
                    <button type="submit"
                        className="mx-auto  sm:w-1/4 sm:px-4  bg-[#D76B30] text-white rounded  w-2/4 px-0 py-2 hover:bg-[#A3C4E0]  ">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;