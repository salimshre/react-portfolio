import { useEffect, useState } from "react";

const USER_URL = "https://api.github.com/users/salimshre";
const REPOS_URL = "https://api.github.com/users/salimshre/repos?sort=updated&per_page=6";

export const fallbackUser = {
  avatar_url: "https://www.ssanu.com.np/images/salim.jpg",
  bio: "Web Developer and Computer Engineer from Kathmandu, Nepal.",
  public_repos: 0,
  followers: 0,
  following: 0,
};

export const fallbackRepos = [
  {
    name: "Portfolio",
    description: "Personal portfolio and project showcase.",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/salimshre",
  },
];

const headers = import.meta.env.VITE_GITHUB_TOKEN
  ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
  : {};

async function getJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }
  return response.json();
}

export function useGitHub() {
  const [user, setUser] = useState(fallbackUser);
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadGitHub() {
      try {
        const [userData, repoData] = await Promise.all([getJson(USER_URL), getJson(REPOS_URL)]);
        if (!active) return;
        setUser({ ...fallbackUser, ...userData });
        setRepos(repoData.length ? repoData : fallbackRepos);
      } catch (err) {
        if (!active) return;
        setError(err.message);
        setUser(fallbackUser);
        setRepos(fallbackRepos);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadGitHub();
    return () => {
      active = false;
    };
  }, []);

  return { user, repos, loading, error };
}
