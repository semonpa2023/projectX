import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutMock } from '../services/mockSession';

function Layout() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  function handleLogout() {
    logoutMock();
    navigate('/login', { replace: true });
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink className="brand" to="/home">X</NavLink>
        <nav className="main-navigation">
          <NavLink to="/home">Inicio</NavLink>
          <NavLink to={`/profile/${currentUser.username}`}>Perfil</NavLink>
        </nav>
        <button className="secondary-button logout-button" onClick={handleLogout}>Cerrar sesión</button>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
      <aside className="right-panel">
        <strong>¿Qué está pasando?</strong>
        <p>Bienvenido a tu primer clon funcional de X.</p>
      </aside>
    </div>
  );
}

export default Layout;
