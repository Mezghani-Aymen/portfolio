import React from 'react'
import { Ripple } from '../../ui/Ripple'
import CallToActionContent from './CallToActionContent'
import Section from '../../ui/Section'

export default function CallToAction() {
  return (
    <Section className="relative flex sm:h-[400px] h-[450px] w-full items-center justify-center overflow-hidden bg-gray-950 text-center sm:px-0 px-5 ">
      <Ripple />
      <CallToActionContent />
    </Section>
  )
}