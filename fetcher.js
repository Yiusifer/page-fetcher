// Importing the request library
const request = require('request');
// Requiring the fs library
const fs = require('fs')

// Slicing the command line arguments to only provide what's relevant
let source = process.argv.slice(2);

let download = (url, filePath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Request failed: " + error);
      return
    };
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log("Failed to write to local path: " + filePath);
      } else {
        console.log("Successfully wrote to local file path");
      }
    } )
  });
 // console.log("After request")
}

download(source[0], source[1]);