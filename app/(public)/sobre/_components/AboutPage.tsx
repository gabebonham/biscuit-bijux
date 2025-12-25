'use client'

import ContactSection from './ContactSection'
import FAQSection from './FAQSection'

export default function AboutPage() {
  return (
    <div className="pt-42 px-4">
      <FAQSection />
      <ContactSection />
    </div>
  )
}
