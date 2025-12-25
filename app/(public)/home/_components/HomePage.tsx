'use client'

import DisplayCategoriesSection from './DisplayCategoriesSection'
import HeroSection from './HeroSection'
import QualitiesSection from './QualitiesSection'
import SendEmailSection from './SendEmailSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <DisplayCategoriesSection />
      <QualitiesSection />
      <SendEmailSection />
    </div>
  )
}
