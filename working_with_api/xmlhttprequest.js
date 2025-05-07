// sending get request

const xhr = new XMLHttpRequest();
//open a connection
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onload = function () {
  if (this.status === 200) {
    console.log("Response:", JSON.parse(xhr.responseText));
  } else {
    console.error("Error:", this.status, this.statusText);
  }
};
xhr.oneerror = function () {
  console.log("Request failed");
};
xhr.send();



// sending post request


const xhr = new XMLHttpRequest();
const data = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
});
// Open a connection
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
// Set request headers
xhr.setRequestHeader('Content-Type', 'application/json');
// Define what to do when the response is received
xhr.onload = function () {
  if (xhr.status === 201) {
    console.log('Response:', JSON.parse(xhr.responseText)); // Parse JSON response
  } else {
    console.error('Error:', xhr.status, xhr.statusText);
  }
};
// Send the request with data
xhr.send(data);



