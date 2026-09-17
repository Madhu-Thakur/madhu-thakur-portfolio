import './ProjectSelector.css'

function ProjectSelector({ items, activeId, onSelect }) {
  return (
    <div className="project-selector" role="group" aria-label="Projects">
      <ul className="project-selector__list">
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <li key={item.id} className="project-selector__item">
              <button
                type="button"
                className={`project-selector__button${
                  isActive ? ' project-selector__button--active' : ''
                }`}
                aria-pressed={isActive}
                onClick={() => onSelect(item.id)}
              >
                <span className="project-selector__number">{item.number}</span>
                <span className="project-selector__name">{item.title}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectSelector