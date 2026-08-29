import projects from '../../data/projects.js'
import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import './SelectedWork.css'

function SelectedWork() {
  const featured = projects.find((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section selected-work">
      <div className="container">
        <div className="selected-work__heading">
          <p className="selected-work__eyebrow">02 — Selected Work</p>
          <h2 className="selected-work__title">Selected Work</h2>
          <p className="selected-work__intro">
            A selection of projects I’ve built while exploring frontend and
            full-stack development.
          </p>
        </div>

        {featured && (
          <div className="selected-work__featured">
            <ProjectCard project={featured} featured />
          </div>
        )}

        <ul className="selected-work__grid">
          {rest.map((project) => (
            <li key={project.id} className="selected-work__grid-item">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SelectedWork