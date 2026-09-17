import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import SelectedWork from './components/SelectedWork/SelectedWork.jsx'
import DeveloperToolkit from './components/DeveloperToolkit/DeveloperToolkit.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Education from './components/Education/Education.jsx'
import Certifications from './components/Certifications/Certifications.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import './components/Navbar/Navbar.css'
import './components/Hero/Hero.css'
import './components/VideoIntro/VideoIntro.css'
import './components/SelectedWork/SelectedWork.css'
import './components/DeveloperToolkit/DeveloperToolkit.css'
import './components/About/About.css'
import './components/Experience/Experience.css'
import './components/Education/Education.css'
import './components/Certifications/Certifications.css'
import './components/ContactForm/ContactForm.css'

function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <DeveloperToolkit />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <ContactForm />
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer__copyright">
            © 2026 Madhu Thakur. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App