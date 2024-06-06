
import React from 'react'

function Buttons(props) {
    const { text, action, className } = props
    return (
        <button className={className} onClick={action} > {text}</button >
    )
}

export default Buttons

