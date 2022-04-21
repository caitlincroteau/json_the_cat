const request = require('request');

const breed = process.argv[2];
const url = "https://api.thecatapiii.com/v1/breeds/search?q=" + breed;


request(url, (error, response, body) => {
  
  if (error) {
    console.log("error: ", error);
    console.log("statusCode: ", response && response.statusCode);
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Breed not found. Please enter another breed.")
  } 
  else {
    console.log(data[0]["description"]);
  }
}); 