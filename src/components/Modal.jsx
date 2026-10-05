import { useEffect, useRef } from 'react'
import Icon from './Icon'
export default function Modal({ title, children, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const previous = document.activeElement
    ref.current.showModal()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = overflow; previous?.focus() }
  }, [])
  return <dialog ref={ref} className="modal" aria-labelledby="dialog-title" onCancel={onClose} onClick={e => { if (e.target === ref.current) onClose() }}><div className="modal-header"><h2 id="dialog-title">{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close dialog"><Icon name="close" /></button></div><div className="modal-body">{children}</div></dialog>
}
