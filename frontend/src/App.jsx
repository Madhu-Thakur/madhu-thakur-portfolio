// Phase 4 — Navbar + Hero + Video Introduction + Selected Work.
// Remaining portfolio sections are implemented in later phases.
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'
import './components/Navbar/Navbar.css'
import './components/Hero/Hero.css'
import './components/VideoIntro/VideoIntro.css'
import './components/SelectedWork/SelectedWork.css'
import './components/ProjectCard/ProjectCard.css'

function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
      </main>
    </div>
  )
}

export default App
