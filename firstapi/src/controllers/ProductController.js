const products = require('../mocks/products');

module.exports = {
  listProducts(request, response) {
    response.writeHead(200,
      {
        'Content-Type': 'application/json'
      });
    response.end(JSON.stringify(products));
  },
};