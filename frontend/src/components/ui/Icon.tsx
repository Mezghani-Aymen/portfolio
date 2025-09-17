import React from 'react';

interface IIconProps {
    IconType: React.ElementType;
    className: string
}

const Icon: React.FC<IIconProps> = ({ IconType, className }) => {
    return <IconType className={className} />;
};

export default Icon;
