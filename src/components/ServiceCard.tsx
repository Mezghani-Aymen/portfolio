import React from 'react';
import { HiArrowLongUp } from "react-icons/hi2";
import { IServiceCardProps } from 'types/serviceCard';

const ServiceCard: React.FC<IServiceCardProps> = ({ index, title, description }) => {
    return (
        <div className="text-white p-8 rounded-xl relative w-full max-w-md border-primary border-b-2 border-t-2 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-2xl">

            <span className="absolute top-6 left-6 text-white text-2xl font-bold border-2 border-primary rounded-full w-12 h-12 flex items-center justify-center">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>

            <h2 className="mt-16 text-2xl font-semibold ">{title}</h2>

            <p className="mt-4 text-base text-gray-400">
                {description}
            </p>

            <button className="absolute top-6 right-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors shadow-lg">
                <HiArrowLongUp className="w-8 h-8 text-white rotate-45" />
            </button>
        </div>

    );
};

export default ServiceCard;