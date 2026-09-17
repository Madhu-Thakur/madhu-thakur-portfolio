import algo1 from '../assets/algo-1.png'
import algo2 from '../assets/algo-2.png'
import algo3 from '../assets/algo-3.png'
import algo4 from '../assets/algo-4.png'
import algo5 from '../assets/algo-5.png'
import algo6 from '../assets/algo-6.png'

import deem1 from '../assets/deem-1.png'
import deem2 from '../assets/deem-2.png'
import deem3 from '../assets/deem-3.png'
import deem4 from '../assets/deem-4.png'
import deem5 from '../assets/deem-5.png'
import deem6 from '../assets/deem-6.png'

import expense1 from '../assets/expense-1.png'
import expense2 from '../assets/expense-2.png'
import expense3 from '../assets/expense-3.png'

import port1 from '../assets/port-1.png'
import port2 from '../assets/port-2.png'
import port3 from '../assets/port-3.png'
import port4 from '../assets/port-4.png'
import port5 from '../assets/port-5.png'
import port6 from '../assets/port-6.png'

import rb1 from '../assets/rb-1.png'
import rb2 from '../assets/rb-2.png'
import rb3 from '../assets/rb-3.png'
import rb4 from '../assets/rb-4.png'
import rb5 from '../assets/rb-5.png'
import rb6 from '../assets/rb-6.png'

const projects = [
  {
    id: 1,
    title: 'DEEM Portal',
    category: 'Admin Panel',
    description:
      'A full-stack business management portal built to manage customers, invoices, vouchers, payments, announcements, notifications, and other internal workflows.',
    technologies: [
      'React 19',
      'Node.js',
      'Express.js',
      'MySQL',
      'Tailwind CSS',
    ],
    images: [
      deem1,
      deem2,
      deem3,
      deem4,
      deem5,
      deem6,
    ],
    liveUrl:
      'https://admin-deem.vercel.app/login',
    githubUrl:
      'https://github.com/Madhu-Thakur/adminDeem',
  },

  {
    id: 2,
    title: 'ElevateCV',
    category: 'Resume Builder',
    description:
      'A full-stack resume builder that helps users create, customize, and manage professional resumes through a structured web interface.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Bootstrap',
    ],
    images: [
      rb1,
      rb2,
      rb3,
      rb4,
      rb5,
      rb6,
    ],
    liveUrl:
      'https://elevate-cv-resume-builder.vercel.app/',
    githubUrl:
      'https://github.com/Madhu-Thakur/ElevateCV-resumeBuilder',
  },

  {
    id: 3,
    title: 'Algorithm Analyzer',
    category: 'Algorithm Visualizer',
    description:
      'An interactive sorting and pathfinding visualizer designed to make algorithms easier to understand through real-time visual demonstrations, comparison tools, and step-by-step execution.',
    technologies: [
      'React 19',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    images: [
      algo1,
      algo2,
      algo3,
      algo4,
      algo5,
      algo6,
    ],
    liveUrl:
      'https://algorithmvisualizer-ruby.vercel.app/',
    githubUrl:
      'https://github.com/Madhu-Thakur/algorithm-visualizer',
  },

  {
    id: 4,
    title: 'AI Expense Tracker',
    category: 'AI Web Application',
    description:
      'A smart expense tracking application that allows users to record expenses manually, using natural-language AI input, or through voice commands.',
    technologies: [
      'React',
      'Redux',
      'Firebase',
      'Gemini AI',
      'Tailwind CSS',
      'Vite',
    ],
    images: [
      expense1,
      expense2,
      expense3,
    ],
    liveUrl:
      'https://ai-powered-expense-tracker-jade.vercel.app/',
    githubUrl:
      'https://github.com/Madhu-Thakur/-AI-powered-Expense-Tracker',
  },

  {
    id: 5,
    title: 'Personal Portfolio',
    category: 'Portfolio Website',
    description:
      'A responsive personal portfolio website built to showcase my skills, experience, education, certifications, and projects as a Full Stack Web Developer.',
    technologies: [
      'React.js',
      'Vite',
      'JavaScript',
      'CSS',
    ],
    images: [
      port1,
      port2,
      port3,
      port4,
      port5,
      port6,
    ],
    liveUrl:
      'https://madhu-thakur-portfolio.vercel.app/',
    githubUrl:
      'https://github.com/Madhu-Thakur/madhu-thakur-portfolio',
  },
]

export default projects