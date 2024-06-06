import React, { useState, useEffect } from 'react';
import useIsMobile from '../hooks/useIsMobile';

function Toast({ message, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose(); 
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const isMobile = useIsMobile();

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <>
            {isVisible && (
                <div className={`fixed ${isMobile ? 'top-4 right-0' : 'bottom-4 right-4'}  max-w-xs w-full bg-blue-900 border border-blue-600 rounded-lg shadow-lg text-white  `}>
                    <div className="flex items-center justify-between p-4 border-b border-blue-600 rounded-t-lg">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 rounded mr-2 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <strong className="mr-auto">Success</strong>
                        </div>
                        <button
                            type="button"
                            className="ml-2 text-gray-300 hover:text-gray-100 focus:outline-none"
                            aria-label="Close"
                            onClick={handleClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-4">{message}</div>
                </div>
            )}

        </>

    );

}

export default Toast;
