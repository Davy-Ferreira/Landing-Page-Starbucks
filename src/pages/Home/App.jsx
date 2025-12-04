import Navbar from '../../components/layout/Navbar.jsx'
import Home from '../../components/layout/Home.jsx'
import Trending from '../../components/layout/Trending.jsx'

import background from '../../assets/img/background-mobile.png'

function App() {
  return (
    <>
      {/* Header */}
      <header className="bg-neutral-1 p-3 px-[4%]">
        <Navbar />
      </header>

      {/* Main */}
      <main
        className="bg-contain h-[400vh] "
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* HOME SECTION */}
        <Home />

        {/* TRENDING SECTION */}
        <Trending />
      </main>
    </>
  )
}

export default App
