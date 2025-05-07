// basic get request
fetch('https://jsonplaceholder.typicode.com/postss/1') // "postss" is incorrect
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON from response
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));


//post request

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
    .then(response => response.json())
    .then(data => console.log('Created:', data))
    .catch(error => console.error('Error:', error));
  