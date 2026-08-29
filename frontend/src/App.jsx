// Phase 2 — design-system shell.
// This is a minimal valid app that exercises the new design tokens and
// foundations. Real portfolio sections (Navbar, Hero, Projects, ...) are
// built incrementally in later phases.
function App() {
  return (
    <main className="container">
      <section className="section" aria-labelledby="design-system-heading">
        <span className="eyebrow">Design System</span>
        <h1 id="design-system-heading">Madhu Thakur</h1>
        <p>Full Stack Developer — design foundation in place.</p>
        <p className="muted">
          Body copy set in Inter with comfortable reading size and generous
          line height. Typography, spacing and color follow a single token
          source of truth.
        </p>

        <div className="row" style={{ marginTop: '2rem' }}>
          <button type="button" className="btn btn--primary">
            Primary
          </button>
          <button type="button" className="btn btn--secondary">
            Secondary
          </button>
          <a href="#contact" className="btn btn--link">
            Link button
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
