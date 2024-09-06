import Input from 'components/Input';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const SocialMediaIcons = () => {
    return (
        <div className="flex space-x-4">
            <a href="https://www.facebook.com/MezghaniMohamedAymen" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-[#F5E5D5] opacity-60 hover:opacity-100 " size="2x" />
            </a>
            <a href="tel:+21626236016" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faComments} className="text-[#F5E5D5] opacity-60 hover:opacity-100" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/mezghani-med-aymen/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-[#F5E5D5] opacity-60 hover:opacity-100" size="2x" />
            </a>
            <a href="https://github.com/Mezghani-Aymen" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-[#F5E5D5] opacity-60 hover:opacity-100" size="2x" />
            </a>
        </div>
    );
};

const Contact: React.FC = () => {
    const inputs = [
        { type: "text", id: "name", placeholder: "Full Name", label: "Name" },
        { type: "email", id: "email", placeholder: "Email@gmail.com", label: "Email" },
        { type: "text", id: "subject", placeholder: "Subject Title", label: "Subject" },
        { type: "textarea", id: "message", placeholder: "Message ...", label: "Message" }
    ];
    return (
        <div className="md:flex w-full container mx-auto rounded-lg pt-[6rem] p-6 " id='contact'>
            <div className="flex-1 md:border-r md:border-b-0 border-b mb-5 pb-6 border-accentColor md:pr-5 md:mr-5" data-aos="fade-right">
                <h2 className="text-3xl font-semibold text-[#D76B30]" >Connect with me:</h2>
                <p className="text-[#A3C4E0]">Satisfied with me? Please contact me</p>
                <div className="flex mt-4">
                    <SocialMediaIcons />
                </div>

            </div>
            <div className="flex-1 " data-aos="fade-left">
                <h2 className="text-lg font-semibold text-[#A3C4E0]">Contact me, let's make magic together</h2>
                <form className="mt-4 flex flex-col">
                    {inputs.map((input, index) => (
                        <div className="mb-4" key={index}>
                            <Input type={input.type} id={input.id} placeholder={input.placeholder} label={input.label} />
                        </div>
                    ))}
                    <button type="submit"
                        className="mx-auto  sm:w-1/4 sm:px-4  bg-[#D76B30] text-secondry hover:text-primary rounded  w-2/4 px-0 py-2 hover:bg-[#A3C4E0]  ">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;