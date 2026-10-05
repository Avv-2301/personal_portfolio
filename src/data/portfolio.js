import images from './images.json'
import profilePhoto from '../assets/akshat-profile.jpg'
// Resume facts replace the original sample where the resume provides them.
export const resumePdf = '/Akshat_Vijayvergiya_Resume_FullStackDeveloper.pdf'
export const assets = { logo: images[1], avatar: profilePhoto, portrait: profilePhoto }
export const profile = {
  name: 'Akshat Vijayvergiya',
  email: 'akshatvijayvergiya23@gmail.com',
  title: 'Full Stack Developer',
  location: 'Rajasthan, India',
  phone: '+91 6377608367',
  summary: 'Full Stack Developer with 2+ years of experience in software implementation, application support, and web development using Python, JavaScript/TypeScript, SQL, React.js, Node.js, and MySQL/MongoDB. Skilled at translating client business requirements into technical solutions, building secure REST APIs, and delivering responsive applications in Agile environments.',
  stack: ['Python', 'JavaScript / TypeScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
}
export const socials = [
  { label: 'github.com/Avv-2301', icon: 'terminal', brand: 'github', href: 'https://github.com/Avv-2301' },
  { label: 'leetcode.com/u/Avv_akshat', icon: 'code', brand: 'leetcode', href: 'https://leetcode.com/u/Avv_akshat/' },
  { label: 'linkedin.com/in/akshat-vijayvergiya', icon: 'share', brand: 'linkedin', href: 'https://www.linkedin.com/in/akshat-vijayvergiya-3a3174210/' },
]
export const experiences = [
  { period: 'June 2024 — Present', location: 'Rajasthan, India', role: 'Full Stack Developer', company: 'AvalonTribe Infotech', current: true, points: [
    'Translated client business requirements into product configurations, workflows, and technical implementation solutions.',
    'Designed and implemented 20+ secure REST APIs (JSON), improving data exchange reliability by 40%.',
    'Integrated OpenAI API and LLM-based automation into production workflows, reducing manual processing time by approximately 35%.',
    'Built 5+ responsive React.js (TypeScript) interfaces and improved frontend performance by 20% using memoization and lazy loading.',
  ], tags: ['React.js', 'JavaScript', 'TypeScript', 'REST APIs', 'OpenAI API', 'Node.js'] },
  { period: 'January 2024 — May 2024', location: 'Madhya Pradesh, India', role: 'Software Developer Intern', company: 'Golden Eagle IT Technology', points: [
    'Built and integrated React.js (TypeScript) components with backend APIs in Agile/Scrum sprints, consistently meeting deadlines.',
    'Debugged and refactored legacy code with OOP best practices, reducing bug recurrence by approximately 20%.',
    'Participated in code reviews to improve clean, scalable, reusable code and maintainability.',
  ], tags: ['React.js', 'JavaScript', 'TypeScript', 'Backend APIs', 'OOP', 'Agile / Scrum'] },
]
export const projects = [
  { name: 'AI-Powered Admin Dashboard', theme: 'dashboard', image: images[6], alt: 'Admin dashboard with analytics charts', badge: 'OpenAI API', description: 'End-to-end admin dashboard built with reusable React and TypeScript components, Node.js REST APIs, and LLM-powered summarization prompts.', metricLabel: 'Impact', metric: 'Task processing time cut by 40%', tags: ['React.js', 'TypeScript', 'Node.js', 'OpenAI API', 'REST APIs'] },
  { name: 'Fintech Transaction & Rewards Platform', theme: 'fintech', image: images[5], alt: 'Fintech interface and product design system', badge: '15,000+ accounts', description: 'Fintech platform with validated REST APIs, role-based access control, and injection protection. MySQL and MongoDB integrations maintained 100% data integrity across sources.', metricLabel: 'Focus', metric: 'Wallet, deposits, withdrawals & rewards', tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'] },
  { name: 'Vapor', theme: 'vapor', image: '/vapor-project.svg', alt: 'Vapor gaming website concept with dark game library cards', badge: 'Gaming Website', description: 'Gaming website built with JavaScript and React using a microservices architecture. The stack includes RabbitMQ, Nginx, Docker, and CI/CD.', metricLabel: 'Architecture', metric: 'Microservices', tags: ['JavaScript', 'React', 'RabbitMQ', 'Nginx', 'CI/CD', 'Docker'] },
]
export const competencies = [
  { icon: 'devices', title: 'Frontend Development', description: 'React.js Hooks, reusable component design, state management, JavaScript / TypeScript, HTML5, CSS3, Jest, and React Testing Library.' },
  { icon: 'layers', title: 'Backend & Integrations', description: 'Python, Node.js, Express.js, secure REST/JSON APIs, third-party integrations, microservices, OpenAI API, LLM integration, and prompt engineering.' },
  { icon: 'cloud', title: 'Data, Security & Delivery', description: 'SQL, MySQL design and query optimization, MongoDB, JWT, OAuth 2.0, RBAC, Git, GitHub, Docker, CI/CD, Postman, and Agile/Scrum.' },
]
export const education = [
  { degree: 'Master of Computer Applications (MCA)', period: '2022 — 2024', school: 'Medi-Caps University, Indore', location: 'Madhya Pradesh, India' },
  { degree: 'Bachelor of Computer Applications (BCA)', period: '2019 — 2022', school: 'Sangam University, Bhilwara', location: 'Rajasthan, India' },
]
