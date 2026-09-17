import SkillTooltip from './SkillTooltip.jsx'
import './DeveloperToolkit.css'

function SkillIcon({ skill, active, onToggle }) {
  const Icon = skill.Icon
  const tooltipId = `skill-tooltip-${skill.id}`

  return (
    <button
      type="button"
      className={`skill${active ? ' skill--active' : ''}`}
      style={{ '--skill-color': skill.color }}
      aria-pressed={active}
      aria-describedby={tooltipId}
      onClick={onToggle}
    >
      <span className="skill__icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="skill__name">{skill.name}</span>
      <SkillTooltip skill={skill} tooltipId={tooltipId} />
    </button>
  )
}

export default SkillIcon