import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import { users } from '../data/mockData';
import { getCurrentUser, loginMock } from '../services/mockSession';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('ana');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  if (getCurrentUser()) {
    return <Navigate to="/home" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = users.find((candidate) => candidate.username === username.trim());

    if (!user || password.length < 6) {
      setError('Usuario o contraseña inválidos.');
      return;
    }

    loginMock(user);
    navigate('/home', { replace: true });
  }

  return (
    <main className="auth-layout">
      <section className="auth-brand"><span>X</span><h1>Lo que está pasando ahora</h1></section>
      <section className="auth-panel">
        <h2>Iniciar sesión</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <FormField label="Usuario" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
          <FormField label="Contraseña" name="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {error && <p className="error-message">{error}</p>}
          <button className="primary-button" type="submit">Iniciar sesión</button>
        </form>
        <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
      </section>
    </main>
  );
}

export default LoginPage;
