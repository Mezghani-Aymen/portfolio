import React from 'react';
import { IButtonProps } from 'types/button';

const Button: React.FC<IButtonProps> = ({
    text,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
    ariaLabel,
    ...rest
}) => {
    return (
        <button
            type={type}
            className={`default-button-style ${className}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel || text}
            {...rest}
        >
            {text}
        </button>
    );
};

export default Button;