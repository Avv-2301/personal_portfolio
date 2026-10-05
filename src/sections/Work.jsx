import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Modal from '../components/Modal'
import Tags from '../components/Tags'
import { projects } from '../data/portfolio'
export default function Work() {
  const [selected, setSelected] = useState(null)
  return <section id="work"><SectionHeading title="Selected Work" caption="Open Source & Products"/><div className="project-grid">{projects.map(project => <ProjectCard key={project.name} project={project} onSelect={setSelected}/>)}</div>{selected && <Modal title={selected.name} onClose={() => setSelected(null)}><img className="project-preview" src={selected.image} alt={selected.alt}/><p>{selected.description}</p><div className="project-metric"><span>{selected.metricLabel}</span><strong>{selected.metric}</strong></div><Tags items={selected.tags}/></Modal>}</section>
}
