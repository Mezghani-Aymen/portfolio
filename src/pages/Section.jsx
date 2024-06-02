import React from 'react'
import Cards from '../components/Cards';


function Section(props) {
    const { Title, Data } = props

    const gridClass = Title === 'Project'
        ? 'xl:p-6 p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'
        : 'xl:p-6 p-4 grid gap-6 lg:grid-cols-2 sm:grid-cols-1';

    return (
        <div className="container mx-auto  flex flex-col py-5">
            <h1 className="c-bleu text-center text-5xl mb-4">
                {Title}
            </h1>
            <div className={gridClass}>
                <Cards
                    Type={Title}
                // Title={ }
                // Icon={icon}
                // Details={X || null}
                // Span={X || null}
                />

            </div>
        </div>
    )
}

export default Section;