import React from 'react';
import Input from '../components/Input';
import Buttons from '../components/Buttons';

function Contact() {
    const elements = [
        {
            key: 0,
            type: "text",
            id: "name",
            text: "Full name ",
        },
        {
            key: 1,
            type: "text",
            id: "email",
            text: "Email",
        },
        {
            key: 2,
            type: "text",
            id: "subject",
            text: "Subject",
        },
        {
            key: 3,
            type: "textarea", // Corrected type
            id: "message",
            text: "Your message ",
        }
    ];

    return (
        <div className='container mx-auto py-5'>
            <h1 className='c-bleu text-center text-5xl'>Contact</h1>
            <div className="container mx-auto mt-6 px-5 sm:w-1/2">
                <form className='flex flex-col'>
                    {elements.map((item) => (
                        <Input key={item.key} id={item.id} type={item.type} text={item.text} />
                    ))}
                    <Buttons text={<span>Send</span>} className="btn-home glassmorphism py-2 px-11  w-auto  mx-auto mt-4" />
                </form>

            </div>
        </div>
    );
}

export default Contact