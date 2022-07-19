import HttpClient from './utils/HttpClient';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    return HttpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return HttpClient.post('/contacts', contact);
  }
}

export default new ContactsService();
