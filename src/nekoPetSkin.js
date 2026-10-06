const petSkins = [
  { name: 'copper', filter: 'sepia(0.75) saturate(2.2) hue-rotate(330deg)' },
  { name: 'ocean', filter: 'sepia(0.55) saturate(2.5) hue-rotate(155deg)' },
  { name: 'violet', filter: 'sepia(0.6) saturate(2.6) hue-rotate(235deg)' },
  { name: 'rose', filter: 'sepia(0.65) saturate(2.4) hue-rotate(285deg)' },
  { name: 'lime', filter: 'sepia(0.55) saturate(2.4) hue-rotate(75deg)' },
]

const lastSkinKey = 'portfolio-neko-last-skin'

function choosePetSkin() {
  let previousIndex = -1

  try {
    previousIndex = Number(window.localStorage.getItem(lastSkinKey))
  } catch {
    // Storage can be unavailable in private browsing; randomness still works.
  }

  const choices = petSkins.map((_, index) => index).filter((index) => index !== previousIndex)
  const index = choices[Math.floor(Math.random() * choices.length)]

  try {
    window.localStorage.setItem(lastSkinKey, String(index))
  } catch {
    // The skin is still applied for this visit when storage is unavailable.
  }

  return petSkins[index]
}

export function installNekoPetSkin() {
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches
  ) {
    return
  }

  const skin = choosePetSkin()
  const applySkin = (root) => {
    if (root.matches('.neko') && root.dataset.portfolioPetSkin !== 'applied') {
      root.style.filter = skin.filter
      root.dataset.portfolioPetSkin = 'applied'
      root.dataset.portfolioPetColor = skin.name
    }
  }

  document.querySelectorAll('.neko').forEach(applySkin)

  const observer = new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          applySkin(node)
          node.querySelectorAll('.neko').forEach(applySkin)
        }
      })
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })

  const nekoScript = document.createElement('script')
  nekoScript.src = 'https://louisabraham.github.io/nekojs/neko.js'
  nekoScript.dataset.autostart = ''
  nekoScript.async = true
  document.body.append(nekoScript)
}
