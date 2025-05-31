import { useState, useEffect, useRef } from 'react';
import UserCard from './components/UserCard';
import { GithubUser } from './types/github';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchUser = async () => {
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('Пользователь не найден');
      const data: GithubUser = await res.json();
      setUserData(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUser();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Введите GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Найти</button>
      </form>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
};

export default App;
