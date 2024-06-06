import React from 'react';

function Input(props) {
    const { type, id, text, onChange } = props;

    const commonStyles = {
        backgroundColor: "transparent",
        border: "1px solid rgb(0, 238, 255)",
        borderRadius: "15px",
        padding: "15px",
    };

    return (
        type === "text" ? (
            <input
                type={type}
                id={id}
                placeholder={text}
                className='w-fill h-9 my-2'
                style={commonStyles}
                onChange={onChange}
                onFocus={(e) => e.target.style.color = "rgb(0, 238, 255)"}
                onBlur={(e) => e.target.style.color = "white"}
            />
        ) : (
            <textarea
                id={id}
                placeholder={text}
                className='w-fill h-28 my-2'
                style={commonStyles}
                onChange={onChange}
                onFocus={(e) => e.target.style.color = "rgb(0, 238, 255)"}
                onBlur={(e) => e.target.style.color = "white"}
            />
        )
    );
}

export default Input;
