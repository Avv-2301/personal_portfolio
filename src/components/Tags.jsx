const brands = {
  react: ['#087ea4', 'react'],
  javascript: ['#d4a900', 'JS'],
  typescript: ['#3178c6', 'TS'],
  python: ['#3776ab', 'Py'],
  node: ['#43853d', 'node'],
  express: ['#353535', 'ex'],
  mysql: ['#00758f', 'SQL'],
  mongodb: ['#47a248', 'M'],
  rabbitmq: ['#f60', 'RMQ'],
  nginx: ['#009639', 'N'],
  docker: ['#2496ed', 'D'],
  cicd: ['#7655c8', 'CI'],
  openai: ['#10a37f', 'AI'],
  rest: ['#4768d7', 'API'],
  json: ['#7862a8', '{}'],
  html: ['#e34f26', '5'],
  css: ['#1572b6', '3'],
  jest: ['#c21325', 'J'],
  agile: ['#4b70a6', 'A'],
  oop: ['#7663aa', 'O'],
  api: ['#4768d7', 'API'],
  git: ['#f05032', 'git'],
  postman: ['#ff6c37', 'P'],
  security: ['#526579', '✓'],
}

function getBrand(label) {
  const value = label.toLowerCase()
  if (value.includes('react')) return brands.react
  if (value.includes('typescript')) return brands.typescript
  if (value.includes('javascript')) return brands.javascript
  if (value.includes('python')) return brands.python
  if (value.includes('node')) return brands.node
  if (value.includes('express')) return brands.express
  if (value.includes('mysql')) return brands.mysql
  if (value.includes('mongo')) return brands.mongodb
  if (value.includes('rabbit')) return brands.rabbitmq
  if (value.includes('nginx')) return brands.nginx
  if (value.includes('docker')) return brands.docker
  if (value.includes('ci/cd') || value.includes('pipeline')) return brands.cicd
  if (value.includes('openai') || value.includes('llm')) return brands.openai
  if (value.includes('rest') || value.includes('api')) return brands.rest
  if (value.includes('json')) return brands.json
  if (value.includes('html')) return brands.html
  if (value.includes('css')) return brands.css
  if (value.includes('jest') || value.includes('testing')) return brands.jest
  if (value.includes('agile') || value.includes('scrum')) return brands.agile
  if (value.includes('oop')) return brands.oop
  if (value.includes('git') || value.includes('github')) return brands.git
  if (value.includes('postman')) return brands.postman
  if (value.includes('jwt') || value.includes('oauth') || value.includes('security')) return brands.security
  return ['#687789', label.slice(0, 1).toUpperCase()]
}

function TechIcon({ label }) {
  const [color, mark] = getBrand(label)
  const isReact = label.toLowerCase().includes('react')
  return <span className={isReact ? 'tech-icon tech-icon-react' : 'tech-icon'} aria-hidden="true" style={{ '--tech-color': color }}>{isReact ? <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.25" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.8"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.8" transform="rotate(120 12 12)"/></svg> : mark}</span>
}

export default function Tags({ items }) {
  return <div className="tags">{items.map(item => <span className="tech-tag" key={item}><TechIcon label={item}/><span>{item}</span></span>)}</div>
}
