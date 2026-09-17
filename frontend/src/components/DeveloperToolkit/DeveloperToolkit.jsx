import { useState } from 'react'
import { skills, CATEGORIES } from '../../data/skills.js'
import SkillIcon from './SkillIcon.jsx'
import './DeveloperToolkit.css'

function technologyLabel(count) {
  return `${count} ${count === 1 ? 'Technology' : 'Technologies'}`
}

function DeveloperToolkit() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name)
  const [activeSkillId, setActiveSkillId] = useState(null)

  const activeMeta = CATEGORIES.find(
    (category) => category.name === activeCategory,
  )
  const activeSkills = skills.filter(
    (skill) => skill.category === activeCategory,
  )

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveSkillId(null)
  }

  return (
    <section id="skills" className="section toolkit">
      <div className="container">
        <div className="toolkit__heading">
          <h2 className="toolkit__title">Developer Toolkit</h2>
          <p className="toolkit__intro">
            Technologies and tools I use while building and learning.
          </p>
        </div>

        <div className="toolkit__layout">
          <nav
            className="toolkit__categories"
            aria-label="Technology categories"
          >
            <ul className="toolkit__categories-list">
              {CATEGORIES.map((category) => {
                const count = skills.filter(
                  (skill) => skill.category === category.name,
                ).length
                const isActive = category.name === activeCategory
                return (
                  <li key={category.name} className="toolkit__categories-item">
                    <button
                      type="button"
                      className={`toolkit__category${
                        isActive ? ' toolkit__category--active' : ''
                      }`}
                      aria-pressed={isActive}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      <span className="toolkit__category-name">
                        {category.name}
                      </span>
                      <span className="toolkit__category-count">
                        {String(count).padStart(2, '0')}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div
            className="toolkit__panel"
            role="group"
            aria-label={`${activeCategory} technologies`}
          >
            <div className="toolkit__panel-heading">
              <h3 className="toolkit__panel-title">{activeMeta.name}</h3>
              <p className="toolkit__panel-meta">
                {technologyLabel(activeSkills.length)}
              </p>
              <p className="toolkit__panel-description">
                {activeMeta.description}
              </p>
            </div>

            <ul key={activeCategory} className="toolkit__grid">
              {activeSkills.map((skill) => (
                <li key={skill.id} className="toolkit__grid-item">
                  <SkillIcon
                    skill={skill}
                    active={activeSkillId === skill.id}
                    onToggle={() =>
                      setActiveSkillId((prev) =>
                        prev === skill.id ? null : skill.id,
                      )
                    }
                  />
                </li>
              ))}
            </ul>

            <p className="toolkit__hint">
              Hover or focus a technology for a short description.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeveloperToolkit