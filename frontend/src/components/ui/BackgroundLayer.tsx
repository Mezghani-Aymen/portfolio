import React from 'react'

interface IBackgroundLayerProps {
    id: string;
    ariaHidden?: boolean;
}

function BackgroundLayer(
    {
        id,
        ariaHidden = false
    }: IBackgroundLayerProps
) {
    return (
        <div
            id={id}
            className="absolute inset-0 w-full h-screen"
            aria-hidden={ariaHidden}
        ></div>
    )
}

export default BackgroundLayer