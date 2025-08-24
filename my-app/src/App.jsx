import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturedProperties from './FeaturedProperties'
import AboutSection from './AboutSection'
import CoreValues from './CoreValues'
import ExcellenceInNumbers from './ExcellentInNumbers'
import LuxurySpecialists from './LuxurySpecialities'
import MarketInsights from './MarketInsights'
import MarketReports from './MarketReports'
import ContactSection from './ContactSection'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <HeroSection/>
   <FeaturedProperties/>
   <AboutSection/>
   <CoreValues/>
   <ExcellenceInNumbers/>
   <LuxurySpecialists/>
   <MarketInsights/>
   <MarketReports/>
   <ContactSection/>
   <Footer/>
   </>
  )
}

export default App
