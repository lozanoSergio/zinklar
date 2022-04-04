const PROTOCOL = import.meta.env.VITE_PROTOCOL;
const API_URL = import.meta.env.VITE_GITHUB_API;

export const generateGitQuery = (owner, repo, branch = "master") =>
  `${PROTOCOL}://${API_URL}/repos/${owner}/${repo}/git/trees/${branch}`;
