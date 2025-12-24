'use client'

import DisplayCategoriesSection from './DisplayCategoriesSection'
import HeroSection from './HeroSection'
import QualitiesSection from './QualitiesSection'
import SendEmailSection from './SendEmailSection'

export default function HomePage() {
  return (
    <div className="py-18">
      <HeroSection />
      <DisplayCategoriesSection />
      <QualitiesSection />
      <SendEmailSection />
    </div>
  )
}
