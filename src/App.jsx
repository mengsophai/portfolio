import React from 'react'
import Navbar from './components/Navbat/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />

    </div>
  )
}

export default App