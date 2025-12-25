'use client'

import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import FAQSection from './FAQSection'

export default function AboutPage() {
  return (
    <div className="pt-12 ">
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
