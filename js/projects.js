const PROJECTS = [
  {
    icon: '&#9881;&#65039;',
    title: 'Project One',
    description: 'A full-stack web application with real-time collaboration features, built with modern tooling and a focus on performance.',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    icon: '&#128187;',
    title: 'Project Two',
    description: 'CLI tool for automating developer workflows. Cuts setup time by 80% with configurable presets and smart defaults.',
    tags: ['TypeScript', 'Node.js', 'Shell'],
    github: '#',
    live: null,
  },
  {
    icon: '&#127760;',
    title: 'Project Three',
    description: 'Open-source REST API wrapper with built-in caching, rate limiting, and automatic retry logic.',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
    github: '#',
    live: '#',
  },
  {
    icon: '&#128202;',
    title: 'Project Four',
    description: 'Data visualization dashboard for monitoring system health metrics in real-time with drill-down support.',
    tags: ['JavaScript', 'D3.js', 'CSS Grid'],
    github: '#',
    live: '#',
  },
  {
    icon: '&#128241;',
    title: 'Project Five',
    description: 'Cross-platform mobile app for habit tracking with offline-first storage and background sync.',
    tags: ['React Native', 'SQLite', 'Expo'],
    github: '#',
    live: '#',
  },
  {
    icon: '&#128640;',
    title: 'Project Six',
    description: 'Portfolio template generator — build a polished developer portfolio in under five minutes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
];

function buildTagsHTML(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function buildLinksHTML(github, live) {
  const ghLink = github
    ? `<a class="project-card__link" href="${github}" target="_blank" rel="noopener" aria-label="GitHub">{ }</a>`
    : '';
  const liveLink = live
    ? `<a class="project-card__link" href="${live}" target="_blank" rel="noopener" aria-label="Live site">&#8599; Live</a>`
    : '';
  return ghLink + liveLink;
}

function buildCardHTML(project) {
  return `
    <article class="project-card reveal">
      <div class="project-card__header">
        <span class="project-card__icon">${project.icon}</span>
        <div class="project-card__links">
          ${buildLinksHTML(project.github, project.live)}
        </div>
      </div>
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__description">${project.description}</p>
      <div class="project-card__tags">${buildTagsHTML(project.tags)}</div>
    </article>
  `;
}

function renderProjects(containerId = 'projects-grid', projectList = PROJECTS) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = projectList.map(buildCardHTML).join('');
}

renderProjects();
