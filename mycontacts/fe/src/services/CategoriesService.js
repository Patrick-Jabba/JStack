import HttpClient from './utils/HttpClient';

class CategoriesService {
  async listCategories() {
    return HttpClient.get('/categories');
  }
}

export default new CategoriesService();
