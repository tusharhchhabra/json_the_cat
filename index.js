const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

if (!breedName) {
  console.log("Error: A search term must be provided with the command in order to search for a breed.");
  return;
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});