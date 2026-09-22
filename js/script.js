(function () {
  var root = document.documentElement
  var stored = localStorage.getItem('theme')
  if (stored) root.setAttribute('data-theme', stored)
})()

window.onload = function () {
  var themeToggle = document.getElementById('theme-toggle')
  var navToggle = document.getElementById('nav-toggle')
  var nav = document.getElementById('site-nav')
  var root = document.documentElement

  themeToggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme')
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    var isDark = current === 'dark' || (!current && prefersDark)
    var next = isDark ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  })

  navToggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open')
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  })

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })
}
