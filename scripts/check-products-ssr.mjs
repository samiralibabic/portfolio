import { projects } from '../src/constants/constants.js';

const url = process.env.SSR_CHECK_URL || 'http://localhost:3000/';

const response = await fetch(url);
if (!response.ok) {
  throw new Error(`Failed to fetch ${url} (${response.status})`);
}

const html = await response.text();

const missingTitles = [];
const missingLinks = [];

for (const project of projects) {
  if (!html.includes(project.title)) {
    missingTitles.push(project.title);
  }

  if (!html.includes(project.visit)) {
    missingLinks.push(project.visit);
  }
}

if (missingTitles.length || missingLinks.length) {
  const message = [
    missingTitles.length ? `Missing titles: ${missingTitles.join(', ')}` : null,
    missingLinks.length ? `Missing links: ${missingLinks.join(', ')}` : null,
  ]
    .filter(Boolean)
    .join(' | ');

  throw new Error(`SSR product check failed: ${message}`);
}

console.log(`SSR product check passed for ${projects.length} projects at ${url}`);
