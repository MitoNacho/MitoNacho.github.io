/* ==========================================================================
   NACHO NAVES · data.js
   ÚNICO FICHERO QUE NECESITAS EDITAR PARA CAMBIAR EL CONTENIDO
   --------------------------------------------------------------------------
   - learning[]: tarjetas de la sección "02. APRENDIENDO"
   - projects[]: tarjetas + vista detalle de "03. PROYECTOS"
   ========================================================================== */

/* Iconos SVG inline (16x16, stroke = currentColor) ------------------------ */
const ICONS = {
  terminal:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="11" rx="1"/><path d="M4.5 6l2.5 2-2.5 2M8.5 10.5h3"/></svg>',
  linux:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 1.8c-2 0-3.2 1.6-3.2 3.6 0 1.4.3 2.3-.5 3.8-.6 1.1-1 2.2-.4 3.3.6 1.1 1.9 1.4 3 .8.4.4 1 .6 1.1.6s.7-.2 1.1-.6c1.1.6 2.4.3 3-.8.6-1.1.2-2.2-.4-3.3-.8-1.5-.5-2.4-.5-3.8 0-2-1.2-3.6-3.2-3.6z"/><path d="M6.3 6.3h.01M9.7 6.3h.01M6.8 8.4c.8.6 1.6.6 2.4 0"/></svg>',
  network:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="3" r="1.7"/><circle cx="3" cy="12.5" r="1.7"/><circle cx="13" cy="12.5" r="1.7"/><path d="M7 4.5L4 11M9 4.5l3 6.5M4.7 12.5h6.6"/></svg>',
  radar:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="3"/><path d="M8 8l4-4"/><circle cx="11" cy="5" r="0.6" fill="currentColor"/></svg>',
  logs: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="1"/><path d="M4.5 5.5h7M4.5 8h4.5M4.5 10.5h6"/></svg>',
  shield:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 1.8l5 1.8v4c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6v-4z"/><path d="M6 7.8l1.5 1.5L10.5 6.3"/></svg>',
  brain:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 2.5a2 2 0 00-2 2 2 2 0 00-1.5 2 2 2 0 00.5 1.8A2 2 0 004 11a2 2 0 002.5 2.2V2.5z"/><path d="M9.5 2.5a2 2 0 012 2 2 2 0 011.5 2 2 2 0 01-.5 1.8A2 2 0 0112 11a2 2 0 01-2.5 2.2V2.5z"/></svg>',
  lock: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2M8 10v1.5"/></svg>',
  api: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 2.5C4 2.5 4 5 4 5.5S3 8 2 8s2 .5 2 2.5.5 3 1.5 3M10.5 2.5C12 2.5 12 5 12 5.5s1 2.5 2 2.5-2 .5-2 2.5-.5 3-1.5 3"/><path d="M6 8h4"/></svg>',
  bot: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5.5" width="10" height="7.5" rx="1.5"/><path d="M8 2.5v3M5.5 9h.01M10.5 9h.01M1.5 8.5v2M14.5 8.5v2"/></svg>',
  scan: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 5.5V3.5a1 1 0 011-1h2M14 5.5V3.5a1 1 0 00-1-1h-2M2 10.5v2a1 1 0 001 1h2M14 10.5v2a1 1 0 01-1 1h-2"/><path d="M2.5 8h11"/></svg>',
  chart:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 13.5h11"/><path d="M4.5 11V7M7.5 11V4M10.5 11V8.5M13 11V5.5"/></svg>',
  folder:
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4.5A1 1 0 013 3.5h3l1.5 1.5H13a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1z"/></svg>',
  db: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="8" cy="4" rx="5" ry="2"/><path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4M3 8c0 1.1 2.2 2 5 2s5-.9 5-2"/></svg>',
  code: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 4.5L2 8l3.5 3.5M10.5 4.5L14 8l-3.5 3.5M9 2.5l-2 11"/></svg>',
};

/* ==========================================================================
   02. APRENDIENDO
   status: "practica" → EN PRÁCTICA (verde)
           "aprendiendo" → APRENDIENDO (amarillo)
           "completado" → COMPLETADO (cyan)
   ========================================================================== */
const learning = [
  {
    icon: "terminal",
    title: "PYTHON",
    description:
      "Desarrollo de herramientas, automatización, APIs y análisis de datos.",
    status: "practica",
  },
  {
    icon: "linux",
    title: "LINUX",
    description: "Terminal, permisos, procesos y herramientas de seguridad.",
    status: "practica",
  },
  {
    icon: "network",
    title: "REDES",
    description:
      "Modelos TCP/IP, protocolos, direccionamiento y análisis de tráfico.",
    status: "aprendiendo",
  },
  {
    icon: "radar",
    title: "NMAP",
    description: "Reconocimiento y enumeración de servicios y redes.",
    status: "practica",
  },
  {
    icon: "logs",
    title: "SIEM / SPLUNK",
    description: "Análisis de logs, detección y monitorización.",
    status: "aprendiendo",
  },
  {
    icon: "shield",
    title: "THREAT INTELLIGENCE",
    description: "Investigación de IPs, dominios, hashes y URLs.",
    status: "practica",
  },
  {
    icon: "brain",
    title: "IA APLICADA",
    description:
      "Modelos, prompts y automatización de procesos dentro de un proyecto.",
    status: "practica",
  },
  {
    icon: "lock",
    title: "CRYPTO BÁSICA",
    description:
      "Hashes, cifrado simétrico/asimétrico y análisis de vulnerabilidades.",
    status: "aprendiendo",
  },
  {
    icon: "code",
    title: "GIT / DEVOPS",
    description:
      "Control de versiones, flujos de trabajo y despliegue continuo.",
    status: "completado",
  },
];

/* ==========================================================================
   03. PROYECTOS
   categories: "ciberseguridad" | "desarrollo" | "automatizacion" | "apis"
   status: "completado" | "practica" | "aprendiendo"
   ========================================================================== */
const projects = [
  {
    id: "ioc-investigator",
    title: "IOC INVESTIGATOR",
    subtitle: "Threat Intelligence Tool",
    categories: ["ciberseguridad"],
    tags: ["Python", "Threat Intel", "CLI"],
    description:
      "Herramienta CLI para investigar indicadores de compromiso y cruzarlos contra múltiples fuentes.",
    longDescription:
      "Herramienta CLI para investigar indicadores de compromiso y generar informes estructurados a partir de múltiples fuentes de inteligencia.",
    goal: "Quería una forma rápida y repetible de investigar IOCs desde terminal sin saltar entre webs. El objetivo era tener un único comando que consultara varias fuentes, priorizara el riesgo y dejara un informe listo para compartir.",
    technologies: ["Python", "Requests", "VirusTotal", "AbuseIPDB", "OTX"],
    learned: [
      "Integración de APIs",
      "Gestión de errores y rate limits",
      "Arquitectura modular",
      "CLI con argparse",
      "Generación de informes",
    ],
    github: "https://github.com/",
    docs: "https://github.com/MitoNacho/ioc-investigator/blob/main/README.md",
    status: "completado",
    terminal: {
      cmd: "ioc-investigator --help",
      output: [
        { text: "$ ioc-investigator --help", cls: "t-cmd" },
        { text: "", cls: "" },
        { text: "Options:", cls: "" },
        { text: "Análisis de IPs", cls: "t-flag" },
        { text: "Consulta de reputación", cls: "t-flag" },
        { text: "Obtención de contexto adicional", cls: "t-flag" },
        { text: "Cálculo de riesgo", cls: "t-flag" },
        { text: "Generación de recomendaciones", cls: "t-flag" },
      ],
    },
  },
  /*
  {
    id: "black-compass",
    title: "BLACK COMPASS",
    subtitle: "Recon CLI",
    categories: ["ciberseguridad"],
    tags: ["Python", "Recon", "Kali Linux"],
    description:
      "CLI para reconocimiento en entornos de ciberseguridad: hosts, puertos y servicios.",
    longDescription:
      "CLI de reconocimiento que orquesta escaneos de hosts, puertos y servicios sobre objetivos autorizados, organizando los resultados en un informe único.",
    goal: "Automatizar los primeros pasos de cualquier ejercicio de reconocimiento: descubrir hosts vivos, enumerar puertos y recoger servicios en un formato limpio y reutilizable.",
    technologies: ["Python", "Nmap", "Sockets", "AsyncIO", "Rich"],
    learned: [
      "Escaneo de red con Nmap",
      "Programación asíncrona",
      "Parsing de resultados",
      "Salida formateada en terminal",
    ],
    github: "https://github.com/",
    docs: "#",
    status: "practica",
    terminal: {
      cmd: "black-compass scan 192.168.1.0/24",
      output: [
        { text: "$ black-compass scan 192.168.1.0/24", cls: "t-cmd" },
        { text: "", cls: "" },
        { text: "[*] Descubriendo hosts vivos...", cls: "t-dim" },
        { text: "[+] 192.168.1.1   gateway", cls: "t-flag" },
        { text: "[+] 192.168.1.24  dev-box", cls: "t-flag" },
        { text: "[+] 192.168.1.50  nas", cls: "t-flag" },
        { text: "", cls: "" },
        { text: "[*] Escaneando puertos (1-1024)...", cls: "t-dim" },
        { text: "[ OK ] 3 hosts · 11 servicios", cls: "t-cmd" },
      ],
    },
  },
  */

  {
    id: "youtube-analytics",
    title: "YOUTUBE CHANNEL ANALYTICS",
    subtitle: "Aplicación web para analizar estadísticas de canales",
    categories: ["apis", "desarrollo"],
    tags: ["FastAPI", "YouTube API", "Web"],
    description:
      "App web para analizar métricas y evolución de canales de YouTube.",
    longDescription:
      "Aplicación web que consume la YouTube Data API, muestra métricas de canales, evolución de videos y compara rendimiento entre periodos. Además tiene un pequeño juego en el que tienes que elegir el canal con mayor numero de suscriptores.",
    goal: "Construir una app web completa conectada a una API externa: autenticación, caché, transformación de datos y una interfaz clara para explorar métricas.",
    technologies: ["FastAPI", "YouTube API", "Jinja2", "SQLite", "Render"],
    learned: [
      "Consumo de APIs externas",
      "Caché de respuestas",
      "Diseño de lógica de juego",
      "Formateo y visualización de datos",
    ],
    github: "https://github.com/",
    docs: "#",
    status: "completado",
    terminal: {
      cmd: "uvicorn app:main --reload",
      output: [
        { text: "$ uvicorn app:main --reload", cls: "t-cmd" },
        { text: "", cls: "" },
        { text: "INFO:  Watching directories: [./app]", cls: "t-dim" },
        {
          text: "INFO:  Uvicorn running on http://127.0.0.1:8000",
          cls: "t-flag",
        },
        { text: "INFO:  Application startup complete.", cls: "t-cmd" },
        { text: "", cls: "" },

        {
          text: "DEPLOY: youtube-channel-analytics.onrender.com",
          cls: "t-flag",
        },
      ],
    },
  },
  {
    id: "telegram-reminder-bot",
    title: "TELEGRAM REMINDER BOT",
    subtitle: "Bot de recordatorios y tareas programadas",
    categories: ["automatizacion", "apis"],
    tags: ["Python", "Telegram", "PostgreSQL"],
    description:
      "Bot para recordatorios y tareas programadas con persistencia en PostgreSQL.",
    longDescription:
      "Bot de Telegram que gestiona recordatorios recurrentes y tareas programadas, con almacenamiento persistente y ejecución mediante scheduler.",
    goal: "Aprender a desarrollar un bot conversacional, trabajar la persistencia de datos y ejecución programada de tareas.",
    technologies: [
      "Python",
      "Telegram",
      "PostgreSQL",
      "SQLAlchemy",
      "APScheduler",
    ],
    learned: [
      "Bots conversacionales",
      "Diseño de esquema SQL",
      "Jobs programados",
      "Manejo de estados de usuario y timezone",
    ],
    github: "https://github.com/",
    docs: "https://github.com/MitoNacho/telegram-reminder-bot/blob/main/README.md",
    status: "completado",
    terminal: {
      cmd: "python bot.py --status",
      output: [
        { text: "$ python bot.py --help", cls: "t-cmd" },
        { text: "", cls: "" },
        { text: "Usuario pulsa ➕ Añadir recordatorio", cls: "t-cmd" },
        { text: "Introducir asunto ➕ fecha ➕ hora", cls: "t-flag" },
        { text: "Confirmar recordatorio", cls: "t-cmd" },

        { text: "", cls: "" },
        { text: "Programar jobs APScheduler", cls: "t-warn" },
      ],
    },
  },
  {
    id: "slot-machine",
    title: "SLOT MACHINE",
    subtitle: "Mini-juego de tragaperras",
    categories: ["automatizacion"],
    tags: ["Python", "AsyncIO", "Sockets"],
    description:
      "Bot desarrollado en Python, con arquitectura backend modular y persistencia real en PostgreSQL.",
    longDescription:
      "Bot de Telegram estilo tragaperras/casino desarrollado en Python, con arquitectura backend modular, persistencia real en PostgreSQL y despliegue cloud en Railway.",
    goal: "Crear, dentro de un proyecto simple, una arquitectura modular robusta y enfocada en la escalabilidad, además de trabajar conceptos del backend que he ido adquiri ",
    technologies: ["Python", "Telegram", "PostgreSQL", "SQLAlchemy"],
    learned: [
      "Arquitectura modular",
      "Persistencia de datos",
      "Lógica de programación",
      "Backend",
    ],
    github: "https://github.com/",
    docs: "https://github.com/MitoNacho/slot_machine/blob/main/README.md",
    status: "completado",
    terminal: {
      cmd: "netscan-light -t scanme.nmap.org -p 1-1000",
      output: [
        { text: "$ slot-machine", cls: "t-cmd" },
        { text: "", cls: "" },
        { text: "[*] commands", cls: "t-dim" },
        { text: "/start", cls: "t-flag" },
        { text: "/spin", cls: "t-flag" },
        { text: "/balance", cls: "t-flag" },
        { text: "/stats", cls: "t-flag" },
      ],
    },
  },
  {
    id: "weather-app",
    title: "WEATHER DASHBOARD",
    subtitle: "Aplicación web para consultar el clima en tiempo real",
    categories: ["apis", "desarrollo"],
    tags: ["Python", "Streamlit", "Requests"],
    description:
      "Aplicación meteorológica interactiva con información del clima en tiempo real y una interfaz dinámica.",
    longDescription:
      "Dashboard meteorológico desarrollado con Python y Streamlit que consume la API de OpenWeatherMap para mostrar la temperatura, humedad, viento y sensación térmica. Incluye fondos dinámicos adaptados a las condiciones climáticas, diseño responsive y soporte para modos claro y oscuro.",
    goal: "Desarrollar una aplicación web conectada a una API externa para consultar información meteorológica en tiempo real, transformarla y presentarla mediante una interfaz visual e intuitiva.",
    technologies: ["Python", "Streamlit", "OpenWeatherMap API", "Requests"],
    learned: [
      "Consumo de APIs externas con Python",
      "Procesamiento y presentación de datos meteorológicos",
      "Gestión de claves API y configuración del proyecto",
      "Personalización de interfaces con HTML y CSS",
      "Encriptado de las claves de los servicios",
    ],
    github: "https://github.com/MitoNacho/Weather-App",
    docs: "https://github.com/MitoNacho/Weather-App/blob/main/README.md/",
    status: "completado",
    terminal: {
      cmd: "streamlit run app.py",
      output: [
        { text: "$ streamlit run app.py", cls: "t-cmd" },
        { text: "", cls: "" },
        { text: "Iniciando aplicación meteorológica...", cls: "t-dim" },
        { text: "Framework: Streamlit", cls: "t-cmd" },
        { text: "API: OpenWeatherMap", cls: "t-flag" },
        { text: "Estado: aplicación iniciada", cls: "t-flag" },
        { text: "", cls: "" },
        {
          text: "DEMO: weather-app-4f3mczyqfx5zkly4cafbhk.streamlit.app",
          cls: "t-flag",
        },
      ],
    },
  },
  {
    id: "football-player-api",
    title: "FOOTBALL PLAYER API",
    subtitle: "API REST para consultar información de jugadores de fútbol",
    categories: ["apis"],
    tags: ["Python", "FastAPI", "Web Scraping"],
    description:
      "API REST que obtiene, procesa y almacena información de jugadores de fútbol mediante scraping de Wikipedia.",
    longDescription:
      "API desarrollada con FastAPI que permite consultar información de jugadores de fútbol mediante endpoints REST. Integra scraping automático de Wikipedia con Requests y BeautifulSoup, almacenamiento persistente en SQLite mediante SQLAlchemy y un sistema de normalización de nombres y resolución de alias. Incorpora validación con Pydantic y documentación interactiva con Swagger para facilitar las pruebas y el uso de la API.",
    goal: "Construir una API backend modular capaz de recopilar información externa, procesarla, almacenarla de forma persistente y ofrecerla mediante endpoints REST bien definidos.",
    technologies: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "SQLite",
      "SQLAlchemy",
      "Requests",
      "BeautifulSoup",
      "Pydantic",
    ],
    learned: [
      "Diseño y desarrollo de APIs REST",
      "Arquitectura backend modular y separación de responsabilidades",
      "Web scraping y extracción de datos con BeautifulSoup",
      "Persistencia de datos mediante SQLite y SQLAlchemy ORM",
      "Normalización de texto y resolución de alias",
      "Validación y serialización de datos con Pydantic",
    ],
    github: "https://github.com/MitoNacho/football-player-api",
    docs: "https://github.com/MitoNacho/football-player-api/blob/main/README.md",
    status: "completado",
    terminal: {
      cmd: "uvicorn app.main:app --reload",
      output: [
        {
          text: "$ uvicorn app.main:app --reload",
          cls: "t-cmd",
        },
        { text: "", cls: "" },
        {
          text: "INFO: Uvicorn running on http://127.0.0.1:8000",
          cls: "t-flag",
        },
        {
          text: "INFO: Application startup complete.",
          cls: "t-cmd",
        },
        { text: "", cls: "" },
        {
          text: "GET /players/messi",
          cls: "t-flag",
        },
        {
          text: "DOCS: http://127.0.0.1:8000/docs",
          cls: "t-flag",
        },
      ],
    },
  },
  {
    id: "enumeration-notion-template",
    title: "ENUMERATION WORKSPACE",
    subtitle: "Plantilla en Notion para documentar la fase de enumeración",
    categories: ["ciberseguridad", "herramientas"],
    tags: ["Notion", "Pentesting", "Documentación"],
    description:
      "Plantilla de Notion diseñada para organizar y registrar información durante la fase de enumeración de máquinas en entornos de pentesting.",
    longDescription:
      "Espacio de trabajo en Notion creado para centralizar la información recopilada durante la fase de enumeración de una máquina. Permite mantener los datos ordenados, registrar los hallazgos y estructurar las notas técnicas para facilitar su consulta posterior. Está orientado a mejorar la metodología de trabajo en laboratorios de ciberseguridad y a evitar la pérdida de información relevante durante una auditoría.",
    goal: "Crear un sistema de documentación estructurado que facilite la recopilación, organización y consulta de información durante la enumeración de máquinas, mejorando la trazabilidad de los hallazgos y la eficiencia del proceso de pentesting.",
    technologies: [
      "Notion",
      "Metodología de pentesting",
      "Documentación técnica",
    ],
    learned: [
      "Organización estructurada de información técnica",
      "Documentación de hallazgos durante la enumeración",
      "Estandarización de metodologías de trabajo",
      "Gestión de notas para laboratorios de pentesting",
      "Creación de plantillas reutilizables para auditorías técnicas",
    ],
    github: "#",
    docs: "https://glamorous-hyacinth-b21.notion.site/Plantilla-Fase-Enumeraci-n-3e53b1a4793d80caab6bc3dfecff02e7",
    status: "completado",
    terminal: {
      cmd: "enumeration workspace",
      output: [
        {
          text: "$ enumeration workspace",
          cls: "t-cmd",
        },
        { text: "", cls: "" },
        {
          text: "WORKSPACE: Pentesting",
          cls: "t-flag",
        },
        {
          text: "PHASE: Enumeration",
          cls: "t-flag",
        },
        {
          text: "PURPOSE: Data collection & organization",
          cls: "t-dim",
        },
        { text: "", cls: "" },
        {
          text: "RESOURCE: Notion Template",
          cls: "t-cmd",
        },
        {
          text: "STATUS: Ready to use",
          cls: "t-flag",
        },
      ],
    },
  },
  {
    id: "terminal-portfolio",
    title: "TERMINAL PORTFOLIO",
    subtitle: "Portfolio personal",
    categories: ["desarrollo"],
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "Portfolio personal con estética de terminal retro, construido sin frameworks.",
    longDescription:
      "Mi sitio web con una interfaz tipo terminal retro construida con HTML, CSS y JavaScript vanilla, sin frameworks ni librerías externas.",
    goal: "Tener un espacio propio para documentar lo que aprendo, con una estética que represente mi perfil técnico y que sea rápida, accesible y fácil de mantener.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SVG"],
    learned: [
      "Diseño mobile-first",
      "CSS custom properties",
      "Accesibilidad",
      "Render dinámico con JS",
    ],
    github: "https://github.com/",
    docs: "#",
    status: "completado",
    terminal: {
      cmd: "cat portfolio.info",
      output: [
        { text: "$ cat portfolio.info", cls: "t-cmd" },
        { text: "", cls: "" },
        { text: "name     : Nacho Naves", cls: "t-flag" },
        { text: "stack    : HTML · CSS · JS vanilla", cls: "t-flag" },
        { text: "style    : dark retro / arcade terminal", cls: "t-flag" },
        { text: "weight   : 0 dependencias externas", cls: "t-flag" },
        { text: "", cls: "" },
        { text: "[ OK ] mobile-first", cls: "t-cmd" },
      ],
    },
  },
  {
    id: "passw",
    title: "PASSWORD GENERATOR",
    subtitle: "Aplicación de escritorio para generar y gestionar contraseñas",
    categories: ["desarrollo", "herramientas"],
    tags: ["Python", "Tkinter", "Automatización"],
    description:
      "Aplicación de escritorio que genera contraseñas según distintos niveles de complejidad y permite guardarlas y copiarlas fácilmente.",
    longDescription:
      "Herramienta desarrollada en Python con una interfaz gráfica construida con Tkinter para generar contraseñas con diferentes niveles de complejidad: bajo, medio y alto. Permite guardar las contraseñas en archivos de texto, copiarlas al portapapeles y gestionar su almacenamiento de forma sencilla. Utiliza librerías estándar de Python, por lo que no necesita dependencias externas adicionales.",
    goal: "Desarrollar una aplicación de escritorio sencilla y funcional que facilite la generación de contraseñas con distintos niveles de complejidad, incorporando opciones para copiar y guardar los resultados.",
    technologies: ["Python", "Tkinter", "JSON", "String", "Random"],
    learned: [
      "Desarrollo de interfaces gráficas con Tkinter",
      "Generación de contraseñas mediante lógica programada",
      "Uso de librerías estándar de Python",
      "Gestión de archivos y almacenamiento de datos",
      "Interacción con el portapapeles del sistema",
    ],
    github: "https://github.com/MitoNacho/PassW",
    docs: "https://github.com/MitoNacho/PassW/blob/main/README.md#",
    status: "completado",
    terminal: {
      cmd: "python main.py",
      output: [
        {
          text: "$ python main.py",
          cls: "t-cmd",
        },
        { text: "", cls: "" },
        {
          text: "INITIALIZING: PassW Password Generator",
          cls: "t-dim",
        },
        {
          text: "INTERFACE: Tkinter",
          cls: "t-flag",
        },
        {
          text: "MODE: Desktop application",
          cls: "t-cmd",
        },
        { text: "", cls: "" },
        {
          text: "FEATURE: Password generation",
          cls: "t-flag",
        },
        {
          text: "FEATURE: Clipboard & TXT export",
          cls: "t-flag",
        },
        {
          text: "STATUS: Ready",
          cls: "t-flag",
        },
      ],
    },
  },
];
