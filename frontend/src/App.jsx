// Phase 3 — Navbar + Hero + Video Introduction.
// Remaining portfolio sections are implemented in later phases.
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import './components/Navbar/Navbar.css'
import './components/Hero/Hero.css'
import './components/VideoIntro/VideoIntro.css'

function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
