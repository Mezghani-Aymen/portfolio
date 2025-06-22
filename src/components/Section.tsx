import React from 'react'
import { ISectionProps } from 'types/section';

const Section: React.FC<ISectionProps> = ({ id, children, dataAos, dataAosDelay, extratClass }) => {
    const className = ` ${extratClass ?? ""}`;
    return (
        <div id={id}
            className={className}
            data-aos={dataAos ?? ""}
            data-aos-delay={dataAosDelay ?? ""}
            style={{ scrollPadding: ' 150px 0  #1A1A1A' }}
        >
            {children}
        </div >
    )
}

export default Section