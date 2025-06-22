import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from 'data/servicesData';

const MyService = () => {
    return (
        <div className="w-auto flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {servicesData.map((service, idx) => (
                    <ServiceCard key={idx} title={service.title} description={service.description} index={idx} />
                ))}
            </div>
        </div>
    );
};


export default MyService