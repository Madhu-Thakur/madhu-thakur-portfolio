// DeveloperToolkit — interactive technologies section.
// Owns the section layout, category filtering and skill collection rendering.
// Skill data and icon/color info live in src/data/skills.js.
import { useState } from 'react'
import { skills, CATEGORIES } from '../../data/skills.js'
import SkillIcon from './SkillIcon.jsx'
import './DeveloperToolkit.css'

function DeveloperToolkit() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSkillId, setActiveSkillId] = useState(null)

  const visibleSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveSkillId(null)
  }

  return (
    <section id="skills" className="section toolkit">
      <div className="container">
        <div className="toolkit__heading">
          <p className="toolkit__eyebrow">03 — Developer Toolkit</p>
          <h2 className="toolkit__title">Developer Toolkit</h2>
          <p className="toolkit__intro">
            Technologies and tools I use while building and learning.
          </p>
        </div>

        <div
          className="toolkit__filters"
          role="group"
          aria-label="Filter technologies by category"
        >
          {CATEGORIES.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                className={`toolkit__filter${
                  isActive ? ' toolkit__filter--active' : ''
                }`}
                aria-pressed={isActive}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            )
          })}
        </div>

        <ul className="toolkit__grid">
          {visibleSkills.map((skill) => (
            <li key={skill.id} className="toolkit__grid-item">
              <SkillIcon
                skill={skill}
                active={activeSkillId === skill.id}
                onToggle={() =>
                  setActiveSkillId((prev) => (prev === skill.id ? null : skill.id))
                }
              />
            </li>
          ))}
        </ul>

        <p className="toolkit__hint">
          Hover or focus a technology for details. Tap on touch devices.
        </p>
      </div>
    </section>
  )
}

export default DeveloperToolkit