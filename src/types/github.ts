export interface GithubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string | null;
    public_repos: number;
    followers: number;
    following: number;
    location: string | null;
    bio: string | null;
  }