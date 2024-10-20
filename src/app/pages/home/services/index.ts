import axios from 'axios';
import { Users } from '../types';

export const getUsers = async (): Promise<Users[]> => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data?.error || 'Erro ao buscar os usuários');
    } else {
      console.error(error);
      throw new Error('Ocorreu um erro desconhecido');
    }
  }
};
