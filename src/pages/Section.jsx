import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { fetchData, fetchImages } from "../services/api";

function Section(props) {
    const { name } = props;
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchData(name);
                setData(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        getData();
    }, [name]);

    useEffect(() => {
        if (name === "Projects" && data) {
            const getImages = async () => {
                try {
                    const fetchedImages = await fetchImages(data);
                    setImages(fetchedImages);
                } catch (error) {
                    console.error("Error fetching images: ", error);
                }
            };
            getImages();
        }
    }, [name, data]);
    const className = name === "Projects" ?
        "xl:p-6 p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" :
        "xl:p-6 p-4 grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
    return (
        <div className="container mx-auto  flex flex-col py-5">
            <h1 className="c-bleu text-center text-5xl mb-4">
                {name}
            </h1>
            <div className={className}>
                {
                    data.map((value, index) => (
                        < Cards
                            key={index}
                            type={name}
                            title={value.title || Object.keys(value)[index]}
                            links={value.links} //for project  type {}
                            imgSrc={images[index]} //for project 
                            skills={value.skills}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Section;
