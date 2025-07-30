// === services/AuthService.js ===
export const logout = () => localStorage.removeItem('token');
export const isLoggedIn = () => !!getToken();


export const saveToken = (token) => {
  localStorage.setItem('JWT_TOKEN', token);
};

export const getToken = () => {
  return localStorage.getItem('JWT_TOKEN');
};
