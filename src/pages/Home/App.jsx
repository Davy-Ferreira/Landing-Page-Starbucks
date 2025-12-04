import { useEffect, useState } from 'react'

import Navbar from '../../components/layout/Navbar.jsx'
import Home from '../../components/layout/Home.jsx'
import Trending from '../../components/layout/Trending.jsx'
import About from '../../components/layout/About.jsx'

import bgCell from '../../assets/img/background-mobile.png'
import bgDesktop from '../../assets/img/background-desktop.png'

function App() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')

    const updateBg = (e) => {
      setIsDesktop(e.matches)
    }

    // inicial
    updateBg(mq)

    mq.addEventListener('change', updateBg)

    return () => mq.removeEventListener('change', updateBg)
  }, [])

  return (
    <>
      {/* Header */}
      <header className="bg-neutral-1 p-3 px-[4%]">
        <Navbar />
      </header>

      {/* Main */}
      <main
        className="h-[400vh]"
        style={{
          backgroundImage: `url(${isDesktop ? bgDesktop : bgCell})`,
          backgroundSize: isDesktop ? "cover" : "contain",
          backgroundPosition: isDesktop ? "start" : "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* HOME SECTION */}
        <Home />

        {/* TRENDING SECTION */}
        <Trending />

        {/* ABOUT SECTION */}
        <About />
      </main>
    </>
  )
}

export default App
