// module.exports = () => {
//   // indefinido
// };


 const fs = require("fs");

  fs.readFile("./README.md", function (err,data) {
    if (err) {
      console.log(err('ha ocurrido un error'));
    }
    const read = data.toString();
 
    console.log(read)
    })
 
