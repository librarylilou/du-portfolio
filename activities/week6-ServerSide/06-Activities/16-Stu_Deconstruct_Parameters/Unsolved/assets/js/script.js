fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  // Uses a promise function to return a "response" parameter
  // when the promise is completed callback is executed with JSON to expose data structures
  .then(function (response) {
    return response.json();
  })
  // Uses a promise function to be resolved 
  // Data parameter 
  .then(function (data) {
    console.log(data);
  });
  
// Parameter explanation.
