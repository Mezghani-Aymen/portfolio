"use client"
import React from 'react'
import dynamic from "next/dynamic";
import Section from '../../ui/Section';
import { skillsList } from '@/src/constants/skills';

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
    ssr: false,
});

function Skills() {

    return (
        <Section className="flex items-center justify-center flex-col py-14" id='skills'>
            <h1 className='text-3xl text-[var(--primary)]'>My knowledge</h1>
            <IconCloud iconSlugs={skillsList} />
        </Section>
    )
}

export default Skills