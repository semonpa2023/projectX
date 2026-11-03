import { Link, useParams } from 'react-router-dom';
import { users } from '../data/mockData';

function ConnectionsPage({ type }) {
  const { username } = useParams();
  const user = users.find((candidate) => candidate.username === username);

  if (!user) {
    return <p className="error-message">El usuario no existe.</p>;
  }

  const ids = type === 'followers' ? user.followers : user.following;
  const connections = users
    .filter((candidate) => ids.includes(candidate.id))
    .sort((first, second) => first.name.localeCompare(second.name));

  return (
    <section>
      <header className="page-header"><h1>{type === 'followers' ? 'Seguidores' : 'Siguiendo'}</h1></header>
      {connections.length ? connections.map((connection) => (
        <Link className="user-row" key={connection.id} to={`/profile/${connection.username}`}>
          <div className="avatar">{connection.name.charAt(0)}</div>
          <div><strong>{connection.name}</strong><span>@{connection.username}</span></div>
        </Link>
      )) : <p className="empty-state">No hay usuarios para mostrar.</p>}
    </section>
  );
}

export default ConnectionsPage;
