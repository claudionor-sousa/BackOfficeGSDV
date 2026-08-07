import LoginResponse from './interface/loginResponse';
import LoginRequest from './interface/loginRequest';
import { api } from '../api';

export async function loginBack(data: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/auth/login', data);
  return response.data;
}

export async function loginMock(data: LoginRequest): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'admin@email.com' && data.senha === '123') {
        resolve({
          token: 'mock-token-123456789',
          user: {
            id: 1,
            name: 'Administrador',
            email: data.email,
          },
        });
      } else {
        reject(new Error('Usuário ou senha inválidos'));
      }
    }, 1000);
  });
}
