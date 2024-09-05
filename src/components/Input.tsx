import React from 'react';


interface InputProps {
    type: string;
    id: string;
    placeholder: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ type, id, placeholder, label }) => {
    const styleInput = "w-full p-2 mt-1 bg-transparent border border-[#D76B30] text-[#F5E5D5] rounded focus:outline-none focus:ring-2 focus:ring-[#D76B30]"
    const styleLabel = "block text-[#F5E5D5]"
    return (
        <>
            <label htmlFor={id} className={styleLabel}>{label}</label>
            {type === "textarea" ? (
                <textarea
                    rows={4}
                    id={id}
                    placeholder={placeholder}
                    className={styleInput}
                />
            ) : (
                <input type={type} id={id} placeholder={placeholder} className={styleInput} />
            )}
        </>
    );
}

export default Input;
