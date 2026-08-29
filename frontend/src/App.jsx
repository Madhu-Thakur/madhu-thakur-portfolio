// Phase 5 — Navbar, Hero, Video Intro, Selected Work, Developer Toolkit.
// Remaining portfolio sections are implemented in later phases.
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'
import DeveloperToolkit from './components/DeveloperToolkit/DeveloperToolkit.jsx'
import './components/Navbar/Navbar.css'
import './components/Hero/Hero.css'
import './components/VideoIntro/VideoIntro.css'
import './components/SelectedWork/SelectedWork.css'
import './components/ProjectCard/ProjectCard.css'
import './components/DeveloperToolkit/DeveloperToolkit.css'

function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <DeveloperToolkit />
      </main>
    </div>
  )
}

export default App
