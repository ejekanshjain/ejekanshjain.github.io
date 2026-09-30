const controls = document.querySelector<HTMLFormElement>('#project-controls')!
const search = document.querySelector<HTMLInputElement>('#search')!
const filter = document.querySelector<HTMLSelectElement>('#tag-filter')!
const count = document.querySelector<HTMLElement>('#result-count')!
const empty = document.querySelector<HTMLElement>('#empty-state')!
const reset = document.querySelector<HTMLButtonElement>('#reset-filters')!
const toggle = document.querySelector<HTMLButtonElement>('#theme-toggle')!
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
const projects = [
  ...document.querySelectorAll<HTMLElement>('[data-project]')
].map(element => ({
  element,
  search: element.dataset.search ?? '',
  tags: JSON.parse(element.dataset.tags ?? '[]') as string[]
}))

// Match every search term and the selected tag while preserving project order.
function updateProjects() {
  const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean)
  let visible = 0
  for (const project of projects) {
    const matches =
      terms.every(term => project.search.includes(term)) &&
      (!filter.value || project.tags.includes(filter.value))
    project.element.hidden = !matches
    if (matches) visible++
  }
  count.textContent =
    visible === projects.length
      ? `${visible} projects`
      : `${visible} of ${projects.length} projects`
  empty.hidden = visible !== 0
}

function isDark() {
  const preference = document.documentElement.dataset.theme
  return preference ? preference === 'dark' : systemTheme.matches
}

function updateThemeButton() {
  const dark = isDark()
  document.documentElement.dataset.appearance = dark ? 'dark' : 'light'
  const label = dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'
  toggle.setAttribute('aria-label', label)
  toggle.title = `${label} (D)`
}

function toggleTheme() {
  const preference = isDark() ? 'light' : 'dark'
  document.documentElement.dataset.theme = preference
  try {
    localStorage.setItem('theme', preference)
  } catch {}
  updateThemeButton()
}

controls.hidden = false
toggle.hidden = false
controls.addEventListener('submit', event => event.preventDefault())
search.addEventListener('input', updateProjects)
filter.addEventListener('change', updateProjects)
reset.addEventListener('click', () => {
  search.value = ''
  filter.value = ''
  updateProjects()
  search.focus()
})
toggle.addEventListener('click', toggleTheme)
document.addEventListener('keydown', event => {
  if (
    event.key.toLowerCase() !== 'd' ||
    event.ctrlKey ||
    event.metaKey ||
    event.altKey ||
    event.repeat ||
    event.isComposing ||
    event.defaultPrevented
  )
    return

  const target = document.activeElement
  if (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      target.closest('input, textarea, select, [role="textbox"]'))
  )
    return

  event.preventDefault()
  toggleTheme()
})
systemTheme.addEventListener('change', updateThemeButton)
window.addEventListener('storage', event => {
  if (event.key !== 'theme') return
  if (event.newValue === 'light' || event.newValue === 'dark') {
    document.documentElement.dataset.theme = event.newValue
  } else {
    delete document.documentElement.dataset.theme
  }
  updateThemeButton()
})
updateThemeButton()
