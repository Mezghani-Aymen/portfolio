import React from "react";

interface ISectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    dataAos?: string;
    dataAosDelay?: string;
}

const Section: React.FC<ISectionProps> = ({
    id,
    children,
    dataAos,
    dataAosDelay,
    className,
}) => {

    return (
        <div
            id={id}
            className={className}
            data-aos={dataAos ?? ""}
            data-aos-delay={dataAosDelay ?? ""}
        >
            {children}
        </div>
    );
};

export default Section;