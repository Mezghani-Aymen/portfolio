import React from 'react'
import { Ripple } from '../../ui/Ripple'
import CallToActionContent from './CallToActionContent'

export default function CallToAction() {
  return (
    <div className="relative flex sm:h-[300px] h-[350px] w-full items-center justify-center overflow-hidden bg-gray-950 text-center sm:px-0 px-5 ">
      <Ripple />
      <CallToActionContent />
    </div>
  )
}