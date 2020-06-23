
/* Example in Node.js ES6 using request-promise */

const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '15',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'e5a92c6e-3f78-47c8-bdd3-6911a5cfb09f'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});