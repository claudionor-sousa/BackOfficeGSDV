import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token armazenado no localStorage:', token);
  }, []);

  return (
    <div className="container-aula">
      <h1 className="home-title">Bem-vindo à página inicial!</h1>
      <p className="home-subtitle">
        Esta é a página principal do sistema de autenticação.
      </p>
    </div>
  );
}
