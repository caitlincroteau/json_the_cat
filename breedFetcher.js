const request = require('request');

//refactor into a function:
const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed not found. Please enter another breed.");
    } else {
      callback(null, data[0].description);
    }
  });

};


module.exports = { fetchBreedDescription };


//BELOW WORKS:

// const breed = process.argv[2];
// const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;



// request(url, (error, response, body) => {

//   if (error) {
//     console.log("Request error: ", error);
//     return;
//   }
//   if (response && response.statusCode !== 200) {
//     console.log("ERROR MESSAGE: STATUS CODE NOT 200");
//     return;
//   }

//   const data = JSON.parse(body);
//   if (data.length === 0) {
//     console.log("Breed not found. Please enter another breed.");
//   } else {
//     console.log(data[0]["description"]);
//   }
// });


// console.log("response: ", response && response.statusCode);
// shortcut of if/else statment .... && ...