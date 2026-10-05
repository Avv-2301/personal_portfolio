const paths = {
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/></>,
  share: <><circle cx="6" cy="12" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="m8 11 8-5M8 13l8 5"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
  arrow: <path d="M6 18 18 6M6 6h12v12"/>, code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4"/>,
  copy: <><rect x="8" y="8" width="12" height="13" rx="1"/><path d="M16 8V3H3v13h5"/></>,
  send: <path d="m3 3 19 9-19 9 4-9-4-9Zm4 9h15"/>, download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>,
  devices: <><rect x="3" y="4" width="15" height="12" rx="1"/><path d="M6 20h8m-4-4v4"/><rect x="17" y="10" width="5" height="11" rx="1"/></>,
  cloud: <path d="M7 18H6a4 4 0 0 1-1-8 7 7 0 0 1 13-2 5 5 0 0 1 1 10h-2m-8-4 3 3 5-6"/>,
  verified: <><path d="m12 2 3 2 4 1 1 4 2 3-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-3 1-4 4-1 3-2Z"/><path d="m8 12 3 3 5-6"/></>,
  close: <path d="m6 6 12 12M6 18 18 6"/>, menu: <path d="M4 6h16M4 12h16M4 18h16"/>, tag: <path d="m10 3-3 18m10-18-3 18M4 9h17M3 15h17"/>, check: <path d="m5 12 4 4L19 6"/>,
}
export default function Icon({ name, size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>
}
