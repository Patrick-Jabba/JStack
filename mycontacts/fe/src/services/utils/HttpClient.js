import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    await delay(500);

    return response.json();
  }

  async post(path, body) {
    await delay(500);

    const response = await fetch(path, {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let responseBody = null;

    responseBody = await response.json();

    return responseBody;
  }
}

export default HttpClient;
