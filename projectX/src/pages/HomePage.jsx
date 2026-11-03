import { useState } from 'react';
import TweetCard from '../components/TweetCard';
import { initialTweets } from '../data/mockData';
import { getCurrentUser } from '../services/mockSession';

function HomePage() {
  const [tweets, setTweets] = useState(initialTweets);
  const [body, setBody] = useState('');
  const currentUser = getCurrentUser();

  function publishTweet(event) {
    event.preventDefault();
    if (!body.trim()) return;

    setTweets([
      { id: Date.now(), userId: currentUser.id, body: body.trim(), createdAt: new Date().toISOString() },
      ...tweets,
    ]);
    setBody('');
  }

  return (
    <section>
      <header className="page-header"><h1>Inicio</h1></header>
      <form className="composer" onSubmit={publishTweet}>
        <div className="avatar">{currentUser.name.charAt(0)}</div>
        <div className="composer-content">
          <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="¿Qué está pasando?" maxLength={280} />
          <div className="composer-actions">
            <span>{280 - body.length}</span>
            <button className="primary-button" type="submit" disabled={!body.trim()}>Publicar</button>
          </div>
        </div>
      </form>
      <div>{tweets.length ? tweets.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />) : <p className="empty-state">No hay publicaciones.</p>}</div>
    </section>
  );
}

export default HomePage;
