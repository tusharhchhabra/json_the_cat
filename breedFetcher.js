const request = require("request");
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Error: A search term must be provided with the command in order to search for a breed.");
  return;
}

const searchTerm = args[0];

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

request(url + searchTerm, (error, response, body) => {
  if (error) console.log(error);

  if (!body) return;

  try {
    const bodyObj = JSON.parse(body);
    if (bodyObj.length === 0) {
      console.log("No such cat breed found.");
      return;
    }
    console.log(bodyObj[0].description);
  } catch (error) {
    throw error;
  }
});
