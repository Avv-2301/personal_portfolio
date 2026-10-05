import Icon from '../components/Icon'
import Tags from '../components/Tags'
import { assets, profile, socials } from '../data/portfolio'
export default function Hero() {
  return <section id="about" className="hero-section">
    <div className="hero-bio"><span className="status"><i/>Available for new roles &amp; select consulting</span><div><h1>Hi, I'm Akshat.</h1><p className="hero-subtitle">{profile.title} based in {profile.location}.</p></div><p className="hero-description">{profile.summary}</p><div className="social-links">{socials.map(link => <a className={`button button-white social-brand social-brand-${link.brand}`} key={link.label} href={link.href} target="_blank" rel="noreferrer"><Icon name={link.icon} size={16}/>{link.label}</a>)}</div></div>
    <aside className="profile-card panel" aria-label="Profile and statistics"><div className="profile-person"><div className="portrait"><img src={assets.portrait} alt="Akshat Vijayvergiya"/><i/></div><div><h3>{profile.name}</h3><p>{profile.title}</p><span>{profile.location} · <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a></span></div></div><div className="profile-stats"><div><span className="eyebrow">Experience</span><strong>2+ Yrs</strong></div><div><span className="eyebrow">Shipped Projects</span><strong>5 Projects</strong></div></div><div><p className="eyebrow stack-label">Primary Stack &amp; Foundations</p><Tags items={profile.stack}/></div></aside>
  </section>
}
