import { Link, useParams } from 'react-router-dom';
import TweetCard from '../components/TweetCard';
import { initialTweets, users } from '../data/mockData';

function ProfilePage() {
  const { username } = useParams();
  const user = users.find((candidate) => candidate.username === username);

  if (!user) {
    return <p className="error-message">El usuario no existe.</p>;
  }

  const userTweets = initialTweets.filter((tweet) => tweet.userId === user.id);

  return (
    <section>
      <header className="profile-header">
        <h1>{user.name}</h1>
        <span>@{user.username}</span>
      </header>
      <div className="profile-details">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <p>{user.bio || 'Este usuario todavía no tiene biografía.'}</p>
        <div className="profile-stats">
          <Link to={`/followers/${user.username}`}><strong>{user.followers.length}</strong> Seguidores</Link>
          <Link to={`/following/${user.username}`}><strong>{user.following.length}</strong> Siguiendo</Link>
        </div>
      </div>
      <h2 className="section-title">Publicaciones</h2>
      {userTweets.length ? userTweets.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />) : <p className="empty-state">Este usuario no ha publicado nada.</p>}
    </section>
  );
}

export default ProfilePage;
