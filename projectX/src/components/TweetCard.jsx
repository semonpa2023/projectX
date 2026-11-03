import { Link } from 'react-router-dom';
import { users } from '../data/mockData';

function TweetCard({ tweet }) {
  const author = users.find((user) => user.id === tweet.userId);
  const date = new Date(tweet.createdAt).toLocaleString('es-CO');

  return (
    <article className="tweet-card">
      <div className="avatar">{author.name.charAt(0)}</div>
      <div className="tweet-content">
        <div className="tweet-header">
          <Link to={`/profile/${author.username}`}><strong>{author.name}</strong></Link>
          <span>@{author.username}</span>
          <time>{date}</time>
        </div>
        <p>{tweet.body}</p>
      </div>
    </article>
  );
}

export default TweetCard;
