// stackFlow.js — "My Stack in Action" workflow data.
//
// A conceptual, frontend-only visualization of how a full-stack build flows:
// Idea → Design → React → REST API → Node + Express → Database.
// There is no backend connection in this phase — this is a clean, truthful
// explanation a recruiter can scan in seconds.

import { FaLightbulb, FaPencilRuler, FaReact, FaNetworkWired, FaNodeJs, FaDatabase } from 'react-icons/fa'

export const stackFlow = [
  {
    id: 'idea',
    number: '01',
    title: 'Idea',
    layer: 'Plan',
    Icon: FaLightbulb,
    description:
      'Define the problem, requirements and user flow before implementation.',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    layer: 'Plan',
    Icon: FaPencilRuler,
    description:
      'Plan the interface, user experience and component structure.',
    tools: ['Figma', 'Canva'],
  },
  {
    id: 'react',
    number: '03',
    title: 'React',
    layer: 'Frontend',
    Icon: FaReact,
    description: 'Build reusable UI components and manage interactive state.',
    details: ['Components', 'State', 'Props', 'API Integration'],
  },
  {
    id: 'rest-api',
    number: '04',
    title: 'REST API',
    layer: 'Communication',
    Icon: FaNetworkWired,
    description: 'Define how the frontend talks to the backend over HTTP.',
    details: ['HTTP methods', 'Requests', 'Responses', 'JSON'],
  },
  {
    id: 'node-express',
    number: '05',
    title: 'Node + Express',
    layer: 'Backend',
    Icon: FaNodeJs,
    description: 'Handle server-side logic and expose the REST endpoints.',
    details: ['Routes', 'Controllers', 'Middleware', 'Validation'],
  },
  {
    id: 'database',
    number: '06',
    title: 'Database',
    layer: 'Persistence',
    Icon: FaDatabase,
    description: 'Store and query structured application data (MySQL).',
    details: ['Tables', 'Queries', 'CRUD', 'Relationships'],
  },
]

export default stackFlow