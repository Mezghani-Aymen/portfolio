import React from 'react'
import Input from '../components/Input'

function Contact() {
    const elements =
        [{
            key: 0,
            type: "text",
            text: "Full name ",
            resize: {
                bool: false,
                typeR: null
            }
        },
        {
            key: 1,
            type: "text",
            text: "Full name ",
            resize: {
                bool: false,
                typeR: null
            }
        }
            ,
        {
            key: 2,
            type: "text",
            text: "Subject",
            resize: {
                bool: false,
                typeR: null
            }
        }
            ,
        {
            key: 3,
            type: "texteara",
            text: "your message ",
            resize:
            {
                bool: true,
                typeR: "Hor" || "Ver"
            }
        }
        ]

    const size = {
        width: "100px",
        height: "30px",
    }

    return (
        <div className='mt-24 container mx-auto '>
            <h1 className='c-bleu text-center text-3xl'>Contact</h1>
            <div>
                {elements.map((item, index) => (
                    <Input key={index} id={item.text} type={item.type} text={item.text} fix={item.resize} size={size} />
                ))}
            </div>
        </div>

    )
}

export default Contact