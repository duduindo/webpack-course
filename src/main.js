require("babel-runtime/regenerator")
require("./main.css")
require("./images/link.jpg")
require("./index.html")

var a = async (args) => {	
	const { a, b } = args;
  await console.log("Hello from the future!", a, b);
  console.log('Done');
}


a({a: 1, b: 2})
/*
var a = function () {
  return Promise.resolve().then(function () {    
    return console.log("Hello from the future!");
  }).then(function () {
    console.log('Done');
  });
};

*/