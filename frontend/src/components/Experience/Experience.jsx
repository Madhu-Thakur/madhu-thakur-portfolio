// Experience — professional/training history.
//
// No confirmed employment or training details have been provided, so per the
// no-fabrication rule we render an intentional placeholder rather than invent
// a role, company or dates. When real entries exist they can live on this
// list and render through the same <article> structure below.
function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience__heading">
          <p className="experience__eyebrow">06 — Experience</p>
          <h2 className="experience__title">Experience</h2>
        </div>

        <ul className="experience__list">
          <li className="experience__item">
            <p className="experience__placeholder">
              Professional experience details will be added here.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience