import { useEffect, useRef, useState } from 'react'
import Icon from '../components/Icon'
import { profile } from '../data/portfolio'
export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setError(false); clearTimeout(timer.current); timer.current = setTimeout(() => setCopied(false), 2400) }
    catch { setError(true) }
  }
  return <section id="contact" className="contact-section panel"><div><span className="eyebrow">Connect</span><h2>Let's build something meaningful.</h2><p>Currently open to Principal / Staff Engineer engagements, founding engineer roles, or advisory on distributed systems &amp; frontend performance.</p></div><div className="contact-actions"><button className="button button-muted" onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} size={16}/><span aria-live="polite">{copied ? 'Copied!' : profile.email}</span></button><a className="button button-primary" href={`mailto:${profile.email}`}><Icon name="send" size={16}/>Send Message</a>{error && <p className="copy-error" role="status">Copy unavailable. Email: {profile.email}</p>}</div></section>
}
