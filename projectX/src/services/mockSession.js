const sessionKey = 'projectx-session';

export function getCurrentUser() {
  const storedUser = localStorage.getItem(sessionKey);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function loginMock(user) {
  localStorage.setItem(sessionKey, JSON.stringify(user));
}

export function logoutMock() {
  localStorage.removeItem(sessionKey);
}
