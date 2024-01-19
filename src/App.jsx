import { useState } from 'react'
import Tech from './components/Technologies.jsx'
import Navbar from './components/Navbar'

import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Profiles from './components/Profiles.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className='bg-slate-700'>
      <Navbar />
      <Hero/>
      <Tech />
      <Profiles/>
      <About />
      <Contact/>
      
     
    </div>
  )
}

export default App
