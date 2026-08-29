// StackFlow — "My Stack in Action".
// A conceptual frontend visualization of a full-stack workflow. Owns the
// active-stage state so only one stage expands at a time. Data lives in
// src/data/stackFlow.js — no backend involved in this phase.
import { useState } from 'react'
import { stackFlow } from '../../data/stackFlow.js'
import StackStage from './StackStage.jsx'
import './StackFlow.css'

function StackFlow() {
  const [activeId, setActiveId] = useState(null)

  const handleSelect = (id) =>
    setActiveId((prev) => (prev === id ? null : id))

  return (
    <section id="stack" className="section stack-flow">
      <div className="container">
        <div className="stack-flow__heading">
          <p className="stack-flow__eyebrow">04 — My Stack in Action</p>
          <h2 className="stack-flow__title">My Stack in Action</h2>
          <p className="stack-flow__intro">
            From an idea to a working application, here’s how the pieces
            connect.
          </p>
        </div>

        <ol className="stack-flow__list">
          {stackFlow.map((stage) => (
            <StackStage
              key={stage.id}
              stage={stage}
              active={activeId === stage.id}
              onSelect={() => handleSelect(stage.id)}
              detailsId={`stack-details-${stage.id}`}
            />
          ))}
        </ol>

        <p className="stack-flow__note">
          React communicates with the backend through HTTP requests to a REST
          API — it never talks to the database directly. This same kind of
          stack powers projects like the DEEM Portal.
        </p>
      </div>
    </section>
  )
}

export default StackFlow