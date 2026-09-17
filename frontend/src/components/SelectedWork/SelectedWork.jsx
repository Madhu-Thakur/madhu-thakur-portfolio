import { useState } from 'react'
import projects from '../../data/projects.js'
import ProjectSelector from '../ProjectSelector/ProjectSelector.jsx'
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase.jsx'
import './SelectedWork.css'

const numberedProjects = projects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, '0'),
}))

function SelectedWork() {
  const [activeId, setActiveId] = useState(
    numberedProjects[0]?.id
  )

  const activeProject =
    numberedProjects.find(
      (project) => project.id === activeId
    ) ?? numberedProjects[0]

  if (!activeProject) return null

  return (
    <section id="projects" className="section selected-work">
      <div className="container">
        <div className="selected-work__heading">
          <h2 className="selected-work__title">
            My Projects
          </h2>
        </div>

        <ProjectSelector
          items={numberedProjects}
          activeId={activeProject.id}
          onSelect={setActiveId}
        />

        <ProjectShowcase project={activeProject} />
      </div>
    </section>
  )
}

export default SelectedWork