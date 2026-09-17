import ProjectCarousel from '../ProjectCarousel/ProjectCarousel.jsx'
import './ProjectShowcase.css'

function ProjectLink({ label, url, variant }) {
  const base = 'project-showcase__link'

  const className = variant
    ? `${base} project-showcase__link--${variant}`
    : base

  if (url) {
    return (
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }

  return (
    <span
      className={`${className} project-showcase__link--muted`}
    >
      {label}

      <span className="project-showcase__coming-soon">
        Coming soon
      </span>
    </span>
  )
}

function ProjectShowcase({ project }) {
  if (!project) return null

  return (
    <article className="project-showcase">
      <ProjectCarousel
        key={project.id}
        images={project.images}
        title={project.title}
      />

      <div className="project-showcase__body">
        <p className="project-showcase__number">
          <span>Project / {project.number}</span>

          {project.category ? (
            <span className="project-showcase__category">
              {project.category}
            </span>
          ) : null}
        </p>

        <h3 className="project-showcase__title">
          {project.title}
        </h3>

        <p className="project-showcase__description">
          {project.description}
        </p>

        {project.technologies?.length > 0 ? (
          <ul className="project-showcase__tech">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="project-showcase__tech-item"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <p className="project-showcase__tech-note">
            Tech stack details coming soon.
          </p>
        )}

        <div className="project-showcase__links">
          <ProjectLink
            label="View Live Demo"
            url={project.liveUrl}
            variant="primary"
          />

          <ProjectLink
            label="GitHub / View Source Code"
            url={project.githubUrl}
            variant="secondary"
          />
        </div>
      </div>
    </article>
  )
}

export default ProjectShowcase