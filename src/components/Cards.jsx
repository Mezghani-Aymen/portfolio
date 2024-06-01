import React from 'react'
import git from '../assests/images/github.png'
import img from '../assests/images/mtx.png'
import '../assests/styles/style.css';

function Cards(props) {
    const { Title, icon, } = props;
    const imgSrc = img
    // Define base class names and add conditional ones based on the Title
    const gridClass = Title === 'Project'
        ? 'xl:p-6 p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'
        : 'xl:p-6 p-4 grid gap-6 lg:grid-cols-2 sm:grid-cols-1';

    const cardClass = Title === 'Project'
        ? 'flex flex-col text-white justify-center items-center md:py-4 md:px-4 bg_card rounded-3xl p-4 text-center'
        : 'flex flex-col text-white justify-center items-center md:py-4 md:px-4 bg_card rounded-3xl';

    return (<>
        <div className="container mx-auto bg-black flex flex-col py-5">
            <h1 className="c-bleu text-center text-5xl mb-4">
                {Title === 'Project' ? 'Project' : 'Services'}</h1>
            <div className={gridClass}>
                <div className={cardClass}>
                    {Title === 'Project' && (
                        <div className="rounded-2xl overflow-hidden text-black w-auto">
                            <img src={imgSrc} alt="Image" />
                        </div>
                    )}
                    <h3 className='text-2xl mb-3 text-center mt-5'><span>{icon ? icon : ''}</span> {Title}</h3>
                    <ul className={`my-5 ${Title === 'Project' ? 'flex justify-evenly mt-5 w-full' : 'grid grid-cols-5 md:gap-6 md:grid-cols-8 gap-3'}`}>
                        <li>
                            <a className='shadow'>
                                <img src={git} alt="GitHub" className="w-10 h-10 " />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    </>
    )
}

export default Cards
