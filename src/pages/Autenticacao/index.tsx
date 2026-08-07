import { useEffect, useState } from 'react';
import './styles.scss';
import { loginMock } from '../../services/authService/authService';
import { useNavigate } from 'react-router-dom';

export function Autenticacao() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor ou verificar as credenciais.
    try {
      const response = await loginMock({ email, senha });
      localStorage.setItem('token', response.token);
      navigate('/home'); // Redireciona para a página principal após o login
      console.log(response);
    } catch (error) {
      alert('Erro no login. Verifique suas credenciais e tente novamente.');
      console.error('Erro no login', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-container">
        <h1 className="login-title">Autenticação </h1>
        <h2 className="login-subtitle">Back Office</h2>

        <div className="input-container">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div className="button-container">
          <button type="submit">Entrar</button>
          <button type="button">Esqueci a senha</button>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="lembre-me" />

          <span>lembrar minha senha</span>
        </div>
      </form>
    </div>
  );
}
