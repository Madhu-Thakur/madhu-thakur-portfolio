import './DeveloperToolkit.css'

function SkillTooltip({ skill, tooltipId }) {
  return (
    <span id={tooltipId} className="skill__tooltip">
      <span className="skill__tooltip-title">
        <span className="skill__tooltip-name">{skill.name}</span>
        <span className="skill__tooltip-category">{skill.category}</span>
      </span>
      <span className="skill__tooltip-desc">{skill.description}</span>
      <span className="skill__tooltip-usage">{skill.usage}</span>
    </span>
  )
}

export default SkillTooltip