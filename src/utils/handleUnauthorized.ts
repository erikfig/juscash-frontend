import { NavigateFunction } from 'react-router-dom';

export const handleUnauthorized = (navigate: NavigateFunction) => {
  localStorage.removeItem('token');
  navigate('/login');
};
