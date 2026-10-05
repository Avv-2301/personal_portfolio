import { useState } from 'react'
import { assets, profile, socials } from '../data/portfolio'
import Icon from './Icon'
const links = ['About', 'Experience', 'Work', 'Resume', 'Contact']
export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="header-inner">
    <div className="brand-group"><a className="brand" href="#about"><img src={assets.logo} alt="Portfolio mark"/><strong>Akshat Portfolio</strong></a><span className="status header-status"><i/>Open to work</span></div>
    <nav className={open ? 'navigation is-open' : 'navigation'} id="main-navigation" aria-label="Main navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</nav>
    <div className="header-actions"><div className="header-socials">{socials.map(link => <a key={link.icon} className={`icon-button social-brand social-brand-${link.brand}`} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}><Icon name={link.icon}/></a>)}<a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email Akshat"><Icon name="mail"/></a></div><span className="header-divider"/><a href="#about" aria-label="About Akshat"><img className="header-avatar" src={assets.avatar} alt=""/></a><button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}><Icon name={open ? 'close' : 'menu'}/></button></div>
  </div></header>
}
