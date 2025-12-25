'use client'

import { generalInfo } from '@/constants/general-info'

export default function AboutSection() {
  const aboutText = generalInfo.aboutText
  return (
    <section className="text-center">
      <div className="flex flex-col gap-y-10">
        <h1 className="font-bold text-2xl">Nossa História</h1>
        <div className="font-sans text-gray-600 space-y-4">
          {aboutText.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
