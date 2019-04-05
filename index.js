// module.exports = () => {
//   // indefinido
// };


 const fs = require("fs");
 const path = require ("path");

 const readLinks = () =>{
  fs.readFile("./README.md","utf-8", function (err,data) {
    if (err) {
      console.log(err('ha ocurrido un error'));
    }
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    const result = data.match (urlRegex);
      if (urlRegex != null) {
      }
      console.log(result)
 
    })
    
 }

 readLinks()
 module.exports = readLinks
const readDirectory = ()=>{

  fs.readdir("./",(err, files)=>{
    if(err){
 
      console.log(err);
    } else {
      files.forEach(element => {
        if (path.extname(element) ===".md"){
          fs.readFile(element,"utf-8", (err,data)=>{
            if (err){
              console.log(err);
            } else {
              readLinks(data)
              console.log(element);
            }
          })
        }
       })
    }
  })
  
}
 readDirectory();
console.log(readDirectory());