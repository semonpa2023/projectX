import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import { loginMock } from '../services/mockSession';

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', username: '', email: '', password: '' });

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    loginMock({ id: Date.now(), name: form.name, username: form.username, bio: '', following: [], followers: [] });
    navigate('/home', { replace: true });
  }

  return (
    <main className="auth-layout">
      <section className="auth-brand"><span>X</span><h1>Únete hoy</h1></section>
      <section className="auth-panel">
        <h2>Crear cuenta</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <FormField label="Nombre" name="name" value={form.name} onChange={updateField} />
          <FormField label="Usuario" name="username" value={form.username} onChange={updateField} />
          <FormField label="Correo" name="email" type="email" value={form.email} onChange={updateField} />
          <FormField label="Contraseña" name="password" type="password" value={form.password} onChange={updateField} />
          <button className="primary-button" type="submit">Crear cuenta</button>
        </form>
        <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
      </section>
    </main>
  );
}

export default RegisterPage;
