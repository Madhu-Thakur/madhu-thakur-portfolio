// ProjectCard — displays a single project.
// Receives ALL its data via the `project` prop so it stays decoupled from the
// static data file and can later consume API data (GET /api/projects) without
// a rewrite.
//
// URL rules (No Fabrication):
//   - a real URL renders an accessible external link
//   - `null` renders a subtle "coming soon" state — never a fake link

function ProjectLink({ label, url }) {
  if (url) {
    return (
      <a
        className="project-card__link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }

  return (
    <span className="project-card__link project-card__link--muted">
      {label}
      <span className="project-card__coming-soon">coming soon</span>
    </span>
  )
}

function ProjectCard({ project, featured = false }) {
  if (!project) return null

  const imageAlt = project.image
    ? `${project.title} project interface`
    : ''

  return (
    <article
      className={`project-card${featured ? ' project-card--featured' : ''}`}
    >
      <div className="project-card__visual">
        {project.image ? (
          <img
            className="project-card__image"
            src={project.image}
            alt={imageAlt}
            loading={featured ? 'eager' : 'lazy'}
          />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span className="project-card__placeholder-number">
              {project.number}
            </span>
            <span className="project-card__placeholder-title">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <p className="project-card__number">PROJECT / {project.number}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech} className="project-card__tech-item">
              {tech}
            </li>
          ))}
        </ul>

        <p className="project-card__role">
          <span className="project-card__role-label">Role:</span>{' '}
          {project.role ?? 'Details coming soon'}
        </p>

        <div className="project-card__links">
          <ProjectLink label="Live Demo" url={project.liveUrl} />
          <ProjectLink label="GitHub" url={project.githubUrl} />
          <ProjectLink label="Case Study" url={project.caseStudyUrl} />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard