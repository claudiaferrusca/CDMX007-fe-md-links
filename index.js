// module.exports = () => {
//   // indefinido
// };


 const fs = require("fs");

 const readLinks = () =>{
  fs.readFile("./README.md","utf-8", function (err,data) {
    if (err) {
      console.log(err('ha ocurrido un error'));
    }
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    const result = data.match (urlRegex);
    // const read = data
 
    console.log(result)
    })
 }

 readLinks()
 module.exports = readLinks

 
