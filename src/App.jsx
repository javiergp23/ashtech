import './App.css'
import About from './layouts/About.jsx'
import HeroSection from './layouts/HeroSection.jsx'
import Services from './layouts/Services.jsx'
import WorkWithUs from './layouts/WorkWithUs.jsx'
import Testimonials from './layouts/Testimonials.jsx'
import Contact from './layouts/Contact.jsx'
import Footer from './layouts/Footer.jsx'

function App() {
  

  return (
    <>
      <HeroSection/>
      <Services/>
      <About/>
      <WorkWithUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
