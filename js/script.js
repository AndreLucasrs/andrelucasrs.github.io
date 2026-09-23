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

  // Scroll reveal ---------------------------------------------------------

  var revealTargets = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window && revealTargets.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

    revealTargets.forEach(function (el) { revealObserver.observe(el) })
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible') })
  }

  // Experience timeline fill ------------------------------------------------

  var timelineWrap = document.querySelector('.timeline-wrap')
  var timelineFill = document.getElementById('timeline-fill')

  if (timelineWrap && timelineFill) {
    var ticking = false

    var updateTimeline = function () {
      ticking = false
      var rect = timelineWrap.getBoundingClientRect()
      var vh = window.innerHeight
      var start = vh * 0.85
      var end = vh * 0.35
      var span = rect.height + (start - end)
      var progress = span > 0 ? (start - rect.top) / span : 0
      progress = Math.max(0, Math.min(1, progress))
      timelineFill.style.height = (progress * 100) + '%'
    }

    var onScroll = function () {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(updateTimeline)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    updateTimeline()
  }

  // Console easter egg ------------------------------------------------------

  var consoleTrigger = document.getElementById('console-trigger')
  var consolePanel = document.getElementById('console')
  var consoleClose = document.getElementById('console-close')
  var consoleOutput = document.getElementById('console-output')
  var consoleInput = document.getElementById('console-input')

  if (consolePanel && consoleOutput && consoleInput) {
    var COMMANDS = {
      whoami: 'André Lucas — engenheiro de software sênior. Sistemas distribuídos & pagamentos, hoje no Mercado Livre.',
      skills: 'Java, Kotlin, TypeScript, Spring, Kafka, PostgreSQL, AWS/GCP, Kubernetes, RAG, MCP.',
      projects: 'aegis4j, Cronos, Shine Tecnologia — veja a seção "Projetos" acima.',
      experience: 'Mercado Livre → PicPay → TQI/PagSeguro → ... → TCU. Veja a seção "Experiência".',
      contact: 'andrelrs.v@gmail.com — ou LinkedIn/GitHub no rodapé.',
      sudo: 'Permissão negada. (relaxa, você não precisa de root nesse site)',
      ls: 'sobre  projetos  experiencia  skills  contato',
      pwd: '/home/andre/portfolio'
    }

    var printLine = function (text, cls) {
      var p = document.createElement('p')
      if (cls) p.className = cls
      p.textContent = text
      consoleOutput.appendChild(p)
      consoleOutput.scrollTop = consoleOutput.scrollHeight
    }

    var runCommand = function (raw) {
      var cmd = raw.trim().toLowerCase()
      printLine('> ' + raw, 'cmd')
      if (!cmd) return
      if (cmd === 'help') {
        printLine('comandos: help, whoami, skills, projects, experience, contact, ls, theme, clear, exit')
        return
      }
      if (cmd === 'clear') { consoleOutput.innerHTML = ''; return }
      if (cmd === 'exit') { closeConsole(); return }
      if (cmd === 'theme') {
        themeToggle.click()
        printLine('tema alternado.')
        return
      }
      if (Object.prototype.hasOwnProperty.call(COMMANDS, cmd)) {
        printLine(COMMANDS[cmd])
        return
      }
      printLine('comando não encontrado: ' + cmd + ' (tente "help")', 'err')
    }

    var openConsole = function () {
      consolePanel.hidden = false
      if (!consoleOutput.childElementCount) {
        printLine('Digite "help" para ver os comandos disponíveis.')
      }
      consoleInput.focus()
    }

    var closeConsole = function () {
      consolePanel.hidden = true
    }

    if (consoleTrigger) consoleTrigger.addEventListener('click', openConsole)
    if (consoleClose) consoleClose.addEventListener('click', closeConsole)

    consolePanel.addEventListener('click', function (e) {
      if (e.target === consolePanel) closeConsole()
    })

    document.addEventListener('keydown', function (e) {
      var tag = e.target && e.target.tagName
      var typing = tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)
      if (e.key === '`' && !typing) {
        e.preventDefault()
        if (consolePanel.hidden) openConsole()
        else closeConsole()
      }
      if (e.key === 'Escape' && !consolePanel.hidden) closeConsole()
    })

    consoleInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var value = consoleInput.value
        consoleInput.value = ''
        runCommand(value)
      }
    })
  }
}
