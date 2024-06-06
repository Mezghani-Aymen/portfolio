import React, { useState } from 'react';
import Input from '../components/Input';
import Buttons from '../components/Buttons';
import useFormState from '../hooks/useFormState';
import Toast from './Toast';

function Contact() {
    const { values, errors, handleChange, handleSubmit, resetForm } = useFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const elements = [
        { key: 0, type: "text", id: "name", text: "Full name" },
        { key: 1, type: "text", id: "email", text: "Email" },
        { key: 2, type: "text", id: "subject", text: "Subject" },
        { key: 3, type: "textarea", id: "message", text: "Your message" }
    ];

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const onSubmit = async () => {
        try {
            // Simulate an API call
            setIsFormSubmitted(true)
            resetForm(elements);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className='container mx-auto py-5'>
            <h1 className='c-bleu text-center text-5xl'>Contact</h1>
            <div className="container mx-auto mt-6 px-5 sm:w-1/2">
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    {elements.map((item) => (
                        <React.Fragment key={item.key}>
                            <Input
                                id={item.id}
                                type={item.type}
                                text={item.text}
                                value={values[item.id]}
                                onChange={handleChange}
                            />
                            {errors[item.id] && <p className="text-red-500 text-md ">{errors[item.id]}</p>}
                        </React.Fragment>
                    ))}
                    <Buttons text={<span>Send</span>} className="btn-home glassmorphism py-2 px-11 w-auto mx-auto mt-4" />
                </form>
            </div>
            {isFormSubmitted && (
                <Toast message="Form submitted successfully!" onClose={() => setIsFormSubmitted(false)} />
            )}
        </div>
    );
}

export default Contact;
