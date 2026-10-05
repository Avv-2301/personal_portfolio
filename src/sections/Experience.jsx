import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/portfolio'
export default function Experience() { return <section id="experience"><SectionHeading title="Experience" caption="Chronological History"/><div className="experience-list">{experiences.map(item => <ExperienceCard key={item.company} experience={item}/>)}</div></section> }
