window.onload = function () {
  const body = document.querySelector('body')
  const span = document.querySelector('span')
  const about = document.getElementById('about')
  const experience = document.getElementById('experience')
  const projects = document.getElementById('projects')
  const skill = document.getElementById('skill')
  const galaxy = document.getElementById('galaxy')
  span.addEventListener('click', () => body.classList.toggle('fw'))
  about.addEventListener('click', () => body.classList.toggle('fw'))
  experience.addEventListener('click', () => body.classList.toggle('fw'))
  projects.addEventListener('click', () => body.classList.toggle('fw'))
  skill.addEventListener('click', () => body.classList.toggle('fw'))
  galaxy.addEventListener('click', () => body.classList.toggle('fw'))
}

const linkTo = (id) => (window.location.href = `#${id}`)