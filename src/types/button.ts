import { MouseEvent } from 'react';

export interface IButtonProps {
    text: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    ariaLabel?: string;
    [key: string]: any;
}
