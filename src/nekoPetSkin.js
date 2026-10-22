const petSkins = [
  { name: 'copper', filter: 'sepia(.8) saturate(2.8) hue-rotate(330deg)' },
  { name: 'ocean', filter: 'sepia(.65) saturate(3) hue-rotate(155deg)' },
  { name: 'violet', filter: 'sepia(.7) saturate(3) hue-rotate(235deg)' },
  { name: 'rose', filter: 'sepia(.75) saturate(2.8) hue-rotate(285deg)' },
  { name: 'lime', filter: 'sepia(.65) saturate(3) hue-rotate(75deg)' },
]

const lastSkinKey = 'portfolio-neko-last-skin'

function choosePetSkin() {
  let previousIndex = -1

  try {
    previousIndex = Number(window.localStorage.getItem(lastSkinKey))
  } catch {
    // Continue with a random skin if browser storage is unavailable.
  }

  const choices = petSkins.map((_, index) => index).filter((index) => index !== previousIndex)
  const skin = petSkins[choices[Math.floor(Math.random() * choices.length)]]

  try {
    window.localStorage.setItem(lastSkinKey, String(petSkins.indexOf(skin)))
  } catch {
    // The selected skin still applies for this visit.
  }

  return skin
}

export function installNekoPetSkin() {
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches
  ) {
    return
  }

  const skin = choosePetSkin()
  const applySkin = (element) => {
    if (element.matches('.neko') && element.dataset.portfolioPetSkin !== 'applied') {
      element.style.filter = skin.filter
      element.dataset.portfolioPetSkin = 'applied'
      element.dataset.portfolioPetColor = skin.name
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
