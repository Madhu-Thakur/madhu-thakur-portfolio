// Phase 7 — Navbar, Hero, Video Intro, Selected Work, Developer Toolkit,
// My Stack in Action, About, Experience, Education. Contact comes in Phase 8.
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'
import DeveloperToolkit from './components/DeveloperToolkit/DeveloperToolkit.jsx'
import StackFlow from './components/StackFlow/StackFlow.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Education from './components/Education/Education.jsx'
import './components/Navbar/Navbar.css'
import './components/Hero/Hero.css'
import './components/VideoIntro/VideoIntro.css'
import './components/SelectedWork/SelectedWork.css'
import './components/ProjectCard/ProjectCard.css'
import './components/DeveloperToolkit/DeveloperToolkit.css'
import './components/StackFlow/StackFlow.css'
import './components/About/About.css'
import './components/Experience/Experience.css'
import './components/Education/Education.css'

function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <DeveloperToolkit />
        <StackFlow />
        <About />
        <Experience />
        <Education />
      </main>
    </div>
  )
}

export default App
