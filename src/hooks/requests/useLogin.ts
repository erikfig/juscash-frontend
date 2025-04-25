import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token?: string;
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const login = async (data: LoginData): Promise<LoginResponse> => {
    setLoading(true);
    setError(null);

    try {
      await delay(2000);
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError('Credenciais inválidas. Verifique o e-mail e a senha e tente novamente.');
        } else {
          setError('Ocorreu um problema. Tente novamente mais tarde.');
        }
        return { success: false };
      }

      const responseData = await response.json();
      return { success: true, token: responseData.token };
    } catch (err: any) {
      setError('Ocorreu um problema. Tente novamente mais tarde.');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
