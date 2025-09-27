import React from 'react'
import Icon from '../../ui/Icon';

interface IPrincipleCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

export const PrincipleCard = (
    { title, description, icon }: IPrincipleCardProps
) => {
    return (
        <div
            className="
        relative flex flex-col items-center justify-start 
        rounded-2xl p-6 shadow-md
        bg-gradient-to-b from-[#292c2e] to-[#000000] 
        text-center text-white
        transition-transform hover:scale-105
      "
            role="region"
            aria-label={title}
        >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--primary)]  ">
                <Icon IconType={icon} className={`w-5 h-5 sm:w-7 sm:h-7 `} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
        </div>
    );
};