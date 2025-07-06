
const templates = [
  "Why {name} is {location}'s Top Choice in 2025",
  "{name} – The Best Spot in {location} for Quality",
  "Discover Why Locals Love {name} in {location}",
  "{name} in {location} is Creating Buzz in 2025",
  "{location}'s Hidden Gem: {name}"
];

function generateHeadline(name, location) {
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace('{name}', name).replace('{location}', location);
}

module.exports = { generateHeadline };
