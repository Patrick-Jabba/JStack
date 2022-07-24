import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.HttpClient = new HttpClient('http:/localhost:8080');
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService();
