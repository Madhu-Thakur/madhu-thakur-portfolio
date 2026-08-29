// projects.js — Static project data for the portfolio.
//
// This is the single source of truth for project information during the
// frontend-only phase. Values are intentionally kept factual — the "No
// Fabrication" rule applies. Unavailable details are `null` and the UI
// renders a "coming soon" state instead of a fake link.
//
// Future backend integration will replace this with data from
// GET /api/projects. ProjectCard already receives projects via props, so no
// component rewrite will be required.

export const projects = [
  {
    id: 1,
    title: 'DEEM Portal',
    number: '01',
    description:
      'A full-stack web application built to manage internal workflows. It was developed to demonstrate practical full-stack development across the frontend, backend and database.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    role: null,
    image: null,
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'JeevanDo',
    number: '02',
    description:
      'An application built to explore practical development. Details and live links are coming soon.',
    technologies: ['Coming soon'],
    role: null,
    image: null,
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: 'Algorithm Visualizer',
    number: '03',
    description:
      'A visualization tool for understanding algorithms through interactive demos. Details and links are coming soon.',
    technologies: ['Coming soon'],
    role: null,
    image: null,
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Resume Builder',
    number: '04',
    description:
      'A tool for creating and formatting a professional resume. Details and links are coming soon.',
    technologies: ['Coming soon'],
    role: null,
    image: null,
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: 'AI Expense Tracker',
    number: '05',
    description:
      'An expense tracking application. Details and links are coming soon.',
    technologies: ['Coming soon'],
    role: null,
    image: null,
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: 'AI Blog',
    number: '06',
    description:
      'A blogging application. Details and links are coming soon.',
    technologies: ['Coming soon'],
    role: null,
    image: null,
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
    featured: false,
  },
]

export default projects