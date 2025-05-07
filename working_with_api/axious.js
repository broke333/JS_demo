// get request

// Import Axios if using a module-based setup
const axios = require('axios'); // For Node.js

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response Data:', response.data); // Access data directly
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });


//post request
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then(response => {
    console.log('Created Post:', response.data); // Access created post data
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });
