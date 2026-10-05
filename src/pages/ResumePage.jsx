import Icon from '../components/Icon'
import { profile, resumePdf } from '../data/portfolio'
import './ResumePage.css'

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-page-header">
        <a className="resume-page-brand" href="/">{profile.name}<span>Resume</span></a>
        <nav aria-label="Resume actions">
          <a className="button button-muted" href="/#resume"><Icon name="arrow" size={16}/>Back to portfolio</a>
          <a className="button button-primary" href={resumePdf} download><Icon name="download" size={16}/>Download PDF</a>
        </nav>
      </header>
      <section className="resume-preview" aria-label="Resume preview">
        <iframe title={`${profile.name} resume PDF preview`} src={`${resumePdf}#toolbar=1&navpanes=0&view=FitH`} />
      </section>
    </main>
  )
}
