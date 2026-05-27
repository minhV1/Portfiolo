const PROJECTS = [
  {
    icon: '&#129472;',
    title: 'The Big Cheese',
    description: 'A readable reinforcement learning project where a Q-learning mouse learns to navigate mazes, avoid traps, and reach the cheese.',
    tags: ['Python', 'Q-learning', 'Gymnasium', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/minhV1/The_Big_Cheese',
    live: null,
  },
  {
    icon: '&#128202;',
    title: 'MarketSim',
    description: 'A full-stack day trading pattern trainer that uses real OHLCV candlestick data, prediction scoring, charting, and pattern hints.',
    tags: ['Python', 'FastAPI', 'React', 'Vite', 'yfinance'],
    github: 'https://github.com/minhV1/MarketSim',
    live: null,
  },
  {
    icon: '&#127973;',
    title: 'CareTracker',
    description: 'A Flask patient care documentation tool for managing nurse accounts, patient profiles, prescriptions, care tasks, logs, and notes.',
    tags: ['Python', 'Flask', 'SQLite', 'Jinja2', 'CSS'],
    github: 'https://github.com/minhV1/Medtracker',
    live: null,
  },
  {
    icon: '&#127925;',
    title: 'Loudify',
    description: 'A Spotify-inspired PHP and MySQL music player with authentication, searchable song browsing, custom playlists, and persistent playback state.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/minhV1/loudify',
    live: null,
  },
  {
    icon: '&#127867;',
    title: 'Taproom Trivia Quest',
    description: 'A local-first pub trivia app where hosts create games, players join with a code, questions display on a shared screen, and scores update live.',
    tags: ['React', 'TypeScript', 'Vite', 'LocalStorage', 'CSS'],
    github: 'https://github.com/minhv1/taproom-trivia-quest',
    live: null,
  },
  {
    icon: '&#128179;',
    title: 'CLI Budget Tracker',
    description: 'A dependency-free Python command-line tool for logging expenses, categorizing spending, importing and exporting CSVs, and viewing monthly summaries.',
    tags: ['Python', 'CLI', 'CSV', 'Standard Library'],
    github: 'https://github.com/minhV1/CLI_Budget_Tracker',
    live: null,
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
