var TRANSLATIONS = {
  pt: {
    'nav.sobre': 'Sobre',
    'nav.projetos': 'Projetos',
    'nav.experiencia': 'Experiência',
    'nav.skills': 'Skills',
    'nav.contato': 'Contato',
    'aria.langToggle': 'Alternar idioma (PT/EN)',
    'aria.themeToggle': 'Alternar tema claro/escuro',
    'aria.consoleTrigger': 'Abrir console',
    'aria.consoleTitle': 'Console (ou pressione `)',
    'aria.navToggle': 'Abrir menu',
    'hero.eyebrow': 'Distrito Federal, Brasil',
    'hero.role': 'Engenheiro de Software Sênior — sistemas distribuídos & pagamentos',
    'hero.lede': 'Construo plataformas financeiras que precisam operar com segurança e consistência em escala real —\n' +
      '                Pix, crédito, assinaturas recorrentes — usadas por milhões de pessoas nos maiores ecossistemas de\n' +
      '                fintech do Brasil. Nas horas livres, mantenho o\n' +
      '                <a href="https://github.com/AndreLucasrs/aegis4j"><code>aegis4j</code></a>, uma lib própria de\n' +
      '                agentes de IA para a JVM.',
    'hero.emailBtn': 'Enviar e-mail',
    'sobre.title': 'Sobre',
    'sobre.p1': 'Trabalho com desenvolvimento desde 2015 — comecei estagiando no\n' +
      '                    <abbr title="Tribunal de Contas da União">TCU</abbr>, passei por consultorias de governo\n' +
      '                    (BNDES, CGU, Anatel, Sicoob, Sebrae) e, desde 2020, atuo direto em pagamentos: Pix na TQI/PagSeguro,\n' +
      '                    crédito e débito automático no PicPay, e hoje sistemas de assinatura e catálogo de conteúdo no\n' +
      '                    Mercado Livre.',
    'sobre.p2': 'Sou formado em Análise e Desenvolvimento de Sistemas pelo\n' +
      '                    <a href="https://www.ifg.edu.br/formosa" target="_blank" rel="noopener">Instituto Federal de Goiás (IFG)</a>,\n' +
      '                    onde fui bicampeão da maratona de programação com a equipe Fullstack Overkill. Gosto de arquitetura\n' +
      '                    orientada a eventos, resiliência em sistemas financeiros, e — mais recentemente — de integrar\n' +
      '                    fluxos com Claude Code no dia a dia (documentação, skills reutilizáveis, validação ponta a ponta).',
    'projetos.title': 'Projetos',
    'proj.aegis4j.desc': 'Lib Java/Kotlin de harness para agentes de IA na JVM: guardrails, skills com progressive\n' +
      '                        disclosure, RAG, cliente MCP e model routing — providers e mecanismos construídos do zero,\n' +
      '                        sem depender de framework de IA de terceiro.',
    'proj.cronos.desc': 'Vitrine funcional do aegis4j: um app real de gestão de cronograma que usa os 5 pilares da lib\n' +
      '                        (guardrails, skills, RAG, routing, MCP) em fluxos naturais, testados de ponta a ponta.',
    'proj.shine.desc': 'Site da minha marca pessoal de tecnologia — portfólio e blog técnico.',
    'proj.viewGithub': 'Ver no GitHub →',
    'experiencia.title': 'Experiência',
    'exp.meli.dates': 'dez 2022 — atual',
    'exp.meli.role': 'Engenheiro de Software Sênior',
    'exp.meli.desc': 'No Mercado Pago, atuei no motor de pagamentos recorrentes (Meli+, seguros), do design da\n' +
      '                        solução ao monitoramento em produção. Desde fev/2025, no Mercado Play, desenvolvo\n' +
      '                        microsserviços para o catálogo de conteúdos.',
    'exp.picpay.dates': 'ago 2021 — dez 2022',
    'exp.picpay.role': 'Engenheiro de Software Sênior',
    'exp.picpay.desc': 'Comecei no time de empréstimos, ampliando a oferta após a aquisição do GuiaBolso e integrando\n' +
      '                        parceiros. Liderei o desenvolvimento e lançamento do débito automático para empréstimos,\n' +
      '                        sendo promovido a sênior no processo.',
    'exp.tqi.dates': 'set 2020 — ago 2021',
    'exp.tqi.role': 'Engenheiro de Software',
    'exp.tqi.desc': 'Participei do desenvolvimento e lançamento do Pix, otimizando o tempo de resposta de\n' +
      '                        integrações de transferência, e contribuí para uma nova versão de split de pagamento com\n' +
      '                        foco em resiliência via arquitetura orientada a eventos.',
    'exp.tit.dates': 'jul 2020 — ago 2020',
    'exp.tit.role': 'Desenvolvedor Java',
    'exp.tit.desc': 'Desenvolvimento de features com testes unitários.',
    'exp.mergit.dates': 'set 2019 — jul 2020',
    'exp.mergit.role': 'Desenvolvedor de Software',
    'exp.mergit.desc': 'Desenvolvimento full-stack do "EmConta" (comparador de preços de serviços para\n' +
      '                        microempreendedores) e do "Cash Flow" (gestão de caixa para pequenos negócios).',
    'exp.mirante.dates': 'jun 2019 — set 2019',
    'exp.mirante.role': 'Desenvolvedor Java',
    'exp.mirante.desc': 'Desenvolvimento de sistemas Java com Apache Flex e EJB, com testes de unidade.',
    'exp.polisys2019.dates': 'jan 2019 — mai 2019',
    'exp.polisys2019.role': 'Desenvolvedor Full Stack',
    'exp.polisys2019.desc': 'Sistema de gestão de reuniões para o BNDES.',
    'exp.polisys2017.dates': 'ago 2017 — dez 2018',
    'exp.polisys2017.role': 'Estagiário de Desenvolvimento',
    'exp.polisys2017.desc': 'Portal de transparência para a CGU e sistema de gestão de contas associadas para a Anatel,\n' +
      '                        com testes unitários e de integração.',
    'exp.tcu.dates': 'dez 2015 — ago 2017',
    'exp.tcu.role': 'Estagiário de Desenvolvimento Web',
    'exp.tcu.desc': 'Desenvolvimento de aplicações com Oracle APEX, SQL e PL/SQL, modelagem de dados, documentação\n' +
      '                        e suporte evolutivo.',
    'skills.title': 'Skills',
    'skills.languages': 'Linguagens',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.data': 'Dados & infra',
    'skills.observability': 'Observabilidade & testes',
    'skills.ai': 'IA aplicada',
    'footer.lede': 'Vamos conversar?',
    'footer.shineTitle': 'Site da Shine Tecnologia',
    'meta.title': 'André Lucas — Engenheiro de Software',
    'aria.consoleClose': 'Fechar console',
    'aria.consoleInputLabel': 'Comando do console',
    'console.intro': 'Digite "help" para ver os comandos disponíveis.',
    'console.helpText': 'comandos: help, whoami, skills, projects, experience, contact, ls, theme, clear, exit',
    'console.themeToggled': 'tema alternado.',
    'console.notFoundPrefix': 'comando não encontrado: ',
    'console.notFoundSuffix': ' (tente "help")',
    'console.cmd.whoami': 'André Lucas — engenheiro de software sênior. Sistemas distribuídos & pagamentos, hoje no Mercado Livre.',
    'console.cmd.skills': 'Java, Kotlin, TypeScript, Spring, Kafka, PostgreSQL, AWS/GCP, Kubernetes, RAG, MCP.',
    'console.cmd.projects': 'aegis4j, Cronos, Shine Tecnologia — veja a seção "Projetos" acima.',
    'console.cmd.experience': 'Mercado Livre → PicPay → TQI/PagSeguro → ... → TCU. Veja a seção "Experiência".',
    'console.cmd.contact': 'andrelrs.v@gmail.com — ou LinkedIn/GitHub no rodapé.',
    'console.cmd.sudo': 'Permissão negada. (relaxa, você não precisa de root nesse site)',
    'console.cmd.ls': 'sobre  projetos  experiencia  skills  contato',
    'console.cmd.pwd': '/home/andre/portfolio'
  },
  en: {
    'nav.sobre': 'About',
    'nav.projetos': 'Projects',
    'nav.experiencia': 'Experience',
    'nav.skills': 'Skills',
    'nav.contato': 'Contact',
    'aria.langToggle': 'Toggle language (EN/PT)',
    'aria.themeToggle': 'Toggle light/dark theme',
    'aria.consoleTrigger': 'Open console',
    'aria.consoleTitle': 'Console (or press `)',
    'aria.navToggle': 'Open menu',
    'hero.eyebrow': 'Distrito Federal, Brazil',
    'hero.role': 'Senior Software Engineer — distributed systems & payments',
    'hero.lede': 'I build financial platforms that need to operate securely and consistently at real scale —\n' +
      '                Pix, credit, recurring subscriptions — used by millions of people across Brazil\'s largest fintech\n' +
      '                ecosystems. In my spare time, I maintain\n' +
      '                <a href="https://github.com/AndreLucasrs/aegis4j"><code>aegis4j</code></a>, my own AI agent library\n' +
      '                for the JVM.',
    'hero.emailBtn': 'Send email',
    'sobre.title': 'About',
    'sobre.p1': 'I\'ve been developing software since 2015 — I started as an intern at the\n' +
      '                    <abbr title="Brazilian Federal Court of Accounts">TCU</abbr>, worked through government consulting\n' +
      '                    firms (BNDES, CGU, Anatel, Sicoob, Sebrae) and, since 2020, I\'ve worked directly in payments: Pix at\n' +
      '                    TQI/PagSeguro, credit and auto-debit at PicPay, and today subscription and content catalog systems\n' +
      '                    at Mercado Livre.',
    'sobre.p2': 'I hold a degree in Systems Analysis and Development from\n' +
      '                    <a href="https://www.ifg.edu.br/formosa" target="_blank" rel="noopener">Instituto Federal de Goiás (IFG)</a>,\n' +
      '                    where I was a two-time programming marathon champion with team Fullstack Overkill. I enjoy\n' +
      '                    event-driven architecture, resilience in financial systems, and — more recently — integrating\n' +
      '                    Claude Code into my daily workflow (documentation, reusable skills, end-to-end validation).',
    'projetos.title': 'Projects',
    'proj.aegis4j.desc': 'Java/Kotlin harness library for AI agents on the JVM: guardrails, skills with progressive\n' +
      '                        disclosure, RAG, MCP client and model routing — providers and mechanisms built from scratch,\n' +
      '                        with no dependency on third-party AI frameworks.',
    'proj.cronos.desc': 'A functional showcase for aegis4j: a real schedule-management app that uses the library\'s 5\n' +
      '                        pillars (guardrails, skills, RAG, routing, MCP) in natural flows, tested end to end.',
    'proj.shine.desc': 'Website for my personal tech brand — portfolio and technical blog.',
    'proj.viewGithub': 'View on GitHub →',
    'experiencia.title': 'Experience',
    'exp.meli.dates': 'Dec 2022 — present',
    'exp.meli.role': 'Senior Software Engineer',
    'exp.meli.desc': 'At Mercado Pago, I worked on the recurring payments engine (Meli+, insurance), from solution\n' +
      '                        design to production monitoring. Since Feb/2025, at Mercado Play, I develop microservices\n' +
      '                        for the content catalog.',
    'exp.picpay.dates': 'Aug 2021 — Dec 2022',
    'exp.picpay.role': 'Senior Software Engineer',
    'exp.picpay.desc': 'I started on the loans team, expanding the offering after the GuiaBolso acquisition and\n' +
      '                        integrating partners. I led the development and launch of auto-debit for loans, being\n' +
      '                        promoted to senior in the process.',
    'exp.tqi.dates': 'Sep 2020 — Aug 2021',
    'exp.tqi.role': 'Software Engineer',
    'exp.tqi.desc': 'I took part in the development and launch of Pix, optimizing response times for transfer\n' +
      '                        integrations, and contributed to a new payment-split version focused on resilience through\n' +
      '                        event-driven architecture.',
    'exp.tit.dates': 'Jul 2020 — Aug 2020',
    'exp.tit.role': 'Java Developer',
    'exp.tit.desc': 'Feature development with unit tests.',
    'exp.mergit.dates': 'Sep 2019 — Jul 2020',
    'exp.mergit.role': 'Software Developer',
    'exp.mergit.desc': 'Full-stack development of "EmConta" (a service price comparator for micro-entrepreneurs) and\n' +
      '                        "Cash Flow" (cash management for small businesses).',
    'exp.mirante.dates': 'Jun 2019 — Sep 2019',
    'exp.mirante.role': 'Java Developer',
    'exp.mirante.desc': 'Development of Java systems with Apache Flex and EJB, with unit tests.',
    'exp.polisys2019.dates': 'Jan 2019 — May 2019',
    'exp.polisys2019.role': 'Full Stack Developer',
    'exp.polisys2019.desc': 'Meeting management system for BNDES.',
    'exp.polisys2017.dates': 'Aug 2017 — Dec 2018',
    'exp.polisys2017.role': 'Development Intern',
    'exp.polisys2017.desc': 'Transparency portal for CGU and an associated accounts management system for Anatel, with\n' +
      '                        unit and integration tests.',
    'exp.tcu.dates': 'Dec 2015 — Aug 2017',
    'exp.tcu.role': 'Web Development Intern',
    'exp.tcu.desc': 'Application development with Oracle APEX, SQL and PL/SQL, data modeling, documentation and\n' +
      '                        ongoing support.',
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.data': 'Data & infra',
    'skills.observability': 'Observability & testing',
    'skills.ai': 'Applied AI',
    'footer.lede': "Let's talk?",
    'footer.shineTitle': 'Shine Tecnologia website',
    'meta.title': 'André Lucas — Software Engineer',
    'aria.consoleClose': 'Close console',
    'aria.consoleInputLabel': 'Console command',
    'console.intro': 'Type "help" to see available commands.',
    'console.helpText': 'commands: help, whoami, skills, projects, experience, contact, ls, theme, clear, exit',
    'console.themeToggled': 'theme toggled.',
    'console.notFoundPrefix': 'command not found: ',
    'console.notFoundSuffix': ' (try "help")',
    'console.cmd.whoami': 'André Lucas — senior software engineer. Distributed systems & payments, currently at Mercado Livre.',
    'console.cmd.skills': 'Java, Kotlin, TypeScript, Spring, Kafka, PostgreSQL, AWS/GCP, Kubernetes, RAG, MCP.',
    'console.cmd.projects': 'aegis4j, Cronos, Shine Tecnologia — see the "Projects" section above.',
    'console.cmd.experience': 'Mercado Livre → PicPay → TQI/PagSeguro → ... → TCU. See the "Experience" section.',
    'console.cmd.contact': 'andrelrs.v@gmail.com — or LinkedIn/GitHub in the footer.',
    'console.cmd.sudo': "Permission denied. (relax, you don't need root on this site)",
    'console.cmd.ls': 'about  projects  experience  skills  contact',
    'console.cmd.pwd': '/home/andre/portfolio'
  }
}

function getCurrentLang () {
  return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'pt'
}

function applyLanguage (lang) {
  var dict = TRANSLATIONS[lang] || TRANSLATIONS.pt
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br'

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n')
    if (dict[key] !== undefined) el.textContent = dict[key]
  })
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html')
    if (dict[key] !== undefined) el.innerHTML = dict[key]
  })
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria')
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key])
  })
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-title')
    if (dict[key] !== undefined) el.setAttribute('title', dict[key])
  })
  if (dict['meta.title']) document.title = dict['meta.title']
}

(function () {
  var root = document.documentElement
  var stored = localStorage.getItem('theme')
  if (stored) root.setAttribute('data-theme', stored)

  var storedLang = localStorage.getItem('lang')
  applyLanguage(storedLang === 'en' ? 'en' : 'pt')
})()

window.onload = function () {
  var themeToggle = document.getElementById('theme-toggle')
  var langToggle = document.getElementById('lang-toggle')
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

  langToggle.addEventListener('click', function () {
    var current = root.getAttribute('lang') === 'en' ? 'en' : 'pt'
    var next = current === 'en' ? 'pt' : 'en'
    applyLanguage(next)
    localStorage.setItem('lang', next)
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
    var printLine = function (text, cls) {
      var p = document.createElement('p')
      if (cls) p.className = cls
      p.textContent = text
      consoleOutput.appendChild(p)
      consoleOutput.scrollTop = consoleOutput.scrollHeight
    }

    var runCommand = function (raw) {
      var dict = TRANSLATIONS[getCurrentLang()]
      var cmd = raw.trim().toLowerCase()
      printLine('> ' + raw, 'cmd')
      if (!cmd) return
      if (cmd === 'help') {
        printLine(dict['console.helpText'])
        return
      }
      if (cmd === 'clear') { consoleOutput.innerHTML = ''; return }
      if (cmd === 'exit') { closeConsole(); return }
      if (cmd === 'theme') {
        themeToggle.click()
        printLine(dict['console.themeToggled'])
        return
      }
      var cmdKey = 'console.cmd.' + cmd
      if (dict[cmdKey] !== undefined) {
        printLine(dict[cmdKey])
        return
      }
      printLine(dict['console.notFoundPrefix'] + cmd + dict['console.notFoundSuffix'], 'err')
    }

    var openConsole = function () {
      consolePanel.hidden = false
      if (!consoleOutput.childElementCount) {
        printLine(TRANSLATIONS[getCurrentLang()]['console.intro'])
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
