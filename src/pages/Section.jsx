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
        const getImages = async () => {
            try {
                const result = await fetchImages(data);
                setImages(result);
            } catch (error) {
                console.error("Error fetching images : ", error);
            }
        }
        getImages();
    }, [data]);

    return (
        <div className="container mx-auto  flex flex-col py-5">
            <h1 className="c-bleu text-center text-5xl mb-4">
                {name}
            </h1>
            <div className="xl:p-6 p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {data.map((value, index) => (
                    <Cards
                        key={index}
                        type={name}
                        title={value.title}
                        links={value.links} //for project  type {}
                        icon={value.icon || "a"} //for services  with type []
                        imgSrc={images[index] || null} //for project 
                    />
                ))}
            </div>
        </div>
    );
}

export default Section;
