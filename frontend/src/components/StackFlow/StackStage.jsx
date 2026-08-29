// StackStage — one stage in the workflow accordion.
// Clean disclosure pattern: a <button> toggle with aria-expanded/aria-controls
// and a separate <div> (with `hidden`) for the expandable content.
import './StackFlow.css'

function StackStage({ stage, active, onSelect, detailsId }) {
  const Icon = stage.Icon

  return (
    <li className={`stack-stage${active ? ' stack-stage--active' : ''}`}>
      <button
        type="button"
        className="stack-stage__head"
        aria-expanded={active}
        aria-controls={detailsId}
        onClick={onSelect}
      >
        <span className="stack-stage__number">{stage.number}</span>
        <span className="stack-stage__icon" aria-hidden="true">
          <Icon />
        </span>
        <span className="stack-stage__titles">
          <span className="stack-stage__title">{stage.title}</span>
          <span className="stack-stage__layer">{stage.layer}</span>
        </span>
        <span className="stack-stage__chevron" aria-hidden="true">
          {active ? '−' : '+'}
        </span>
      </button>

      <div id={detailsId} className="stack-stage__details" hidden={!active}>
        <p className="stack-stage__desc">{stage.description}</p>

        {stage.details && (
          <ul className="stack-stage__detail-list">
            {stage.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}

        {stage.tools && (
          <p className="stack-stage__tools">
            <span className="stack-stage__tools-label">Tools:</span>{' '}
            {stage.tools.join(' · ')}
          </p>
        )}
      </div>
    </li>
  )
}

export default StackStage