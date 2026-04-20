import React from 'react'
import { Ripple } from '@/components/ui/Ripple'
import CallToActionContent from '@/components/layout/CallToAction/CallToActionContent'
import Section from '@/components/ui/Section'

export default function CallToAction() {
  return (
    <Section className="relative flex w-full items-center justify-center overflow-hidden py-32 text-center sm:px-0 px-5 border-y border-white/5 bg-zinc-950/20 backdrop-blur-sm">
      <Ripple color="rgba(215, 107, 48, 0.05)" />
      <CallToActionContent />
    </Section>
  )
}