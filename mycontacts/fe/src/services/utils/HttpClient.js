import axios from 'axios';
import delay from '../../utils/delay';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

class HttpClient {
  async get(path) {
    const response = await api.get(path);

    await delay(500);

    return response.data;
  }
}

export default new HttpClient();
