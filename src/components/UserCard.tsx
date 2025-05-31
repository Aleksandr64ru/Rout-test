import { GithubUser } from '../types/github';

interface Props {
  user: GithubUser;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} width={100} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>📍 {user.location}</p>
      <p>📦 {user.public_repos} репозиториев</p>
      <p>👥 {user.followers} подписчиков • {user.following} подписок</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">Профиль на GitHub</a>
    </div>
  );
};

export default UserCard;
