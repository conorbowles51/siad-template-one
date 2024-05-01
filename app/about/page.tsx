import AboutPart from '@/components/about-part'
import { aboutParts } from '@/util/data'
import React from 'react'

export default function About() {
  return (
    <main>
      {
        aboutParts.map((part, index) => (
          <AboutPart
            key={index}
            {...part}
          />
        ))
      }
    </main>
  )
}