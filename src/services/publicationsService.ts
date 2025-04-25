import { getToken } from '../utils/getToken';
import { handleUnauthorized } from '../utils/handleUnauthorized';
import { NavigateFunction } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const listAll = async (navigate: NavigateFunction, filters: Record<string, string> = {}) => {
  try {
    const queryString = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/publications?${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (response.status === 401) {
      handleUnauthorized(navigate);
      return null;
    }

    if (!response.ok) {
      throw new Error('Erro ao listar publicações');
    }

    return await response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const getOne = async (id: string, navigate: NavigateFunction) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (response.status === 401) {
      handleUnauthorized(navigate);
      return null;
    }

    if (!response.ok) {
      throw new Error('Erro ao buscar publicação');
    }

    return await response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const update = async (id: string, data: Record<string, any>, navigate: NavigateFunction) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 401) {
      handleUnauthorized(navigate);
      return null;
    }

    if (!response.ok) {
      throw new Error('Erro ao atualizar publicação');
    }

    return await response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};
