import { useState } from 'react'
import Tech from './components/Technologies.jsx'
import Navbar from './components/Navbar'
import Computer from './components/Computer'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className='bg-slate-700'>
      <Navbar />
      <Hero/>
      <Tech />
      <About/>
      
     
    </div>
  )
}

export default App
