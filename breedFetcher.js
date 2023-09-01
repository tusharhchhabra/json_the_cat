const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = (searchTerm, callback) => {
  request(url + searchTerm, (error, response, body) => {
    if (error) callback(error);

    try {
      const bodyObj = JSON.parse(body);
      if (bodyObj.length === 0) {
        callback("No such cat breed found.");
        return;
      }
      callback(null, bodyObj[0].description);
    } catch (error) {
      callback(error);
    }
  });
};

module.exports = { fetchBreedDescription };