import { AxiosRequestConfig } from 'axios';
import { AxiosContext } from '../context';

export namespace AccountService {
  export const getText = async (id: string) => {
    try {
      const { data, status } = await AxiosContext.get(`/challenge-card/${id}`);
      return { data: data, status: status };
    } catch (error) {
      return { data: null, error: error };
    }
  };
}
