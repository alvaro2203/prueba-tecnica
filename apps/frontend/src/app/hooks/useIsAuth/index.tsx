import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function isAuth() {
  const navigate = useNavigate();
  const token = localStorage.getItem('ucademy-token');

  useEffect(() => {
    if (!token) navigate('/login');
  }, []);
}
