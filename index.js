// module.exports = () => {
//   // indefinido
// };

 const fs = require("fs");
 const path = require ("path");
 const fetch = require ("node-fetch")
const links = require ("./mdlinks");


 const readLinks = (file , validate) => {
  //  console.log(file);
  fs.readFile(file,"utf-8", function (err,data) {
    console.log('asdds')
    if (err) {
      // return console.log(err);
    } else {
      links.getLinks(file, data, validate, dataFetch);
    }
  }) 
}
const dataFetch = async(url,file, text)=>{
  console.log(url);
  const newPromise = await new Promise ((resolve, reject) => {
    fetch (url)
    .then(resultData => {
      console.log(`${file} ${resultData.url} ${resultData.statusText} ${resultData.status} ${text}`)
      resolve(resultData);
    })
    .catch (err => console.log("404 - no entra nunca al servidor", url))
  });
 
  console.log("nuevapromesa: ", newPromise)
//const resultData = await newPromise
console.log("resultData: ", resultData)
console.log("resultDatito")

if(options.validate && options.stats){
  console.log("estadistica");
let totalLinks = 0; 
let countUnique = 0;
for (let i=0; i<resultData.length; ++i){
  unique ++;
    for (let j= i+1; j<resultData.lenght; j++){
      if (resultData[i]!==resultData[j]){
        countUnique ++
      }
 return console.log(totalLinks)
    }

  } 
  if (options.validate){
 result.forEach(element=>{
   console.log(`${resultData.status}-${resultMessage.status}`)
   if(resultData=== null){
     console.log ("Broken")
   } else {
     console.log("Links")
   }  if(options.stats){
     resultData()
   }

 })
  }
}
// }else if(la opcion es validar){
//   va a hacer la petición a fetch de cada links(foreach), va a regresar(consolear) el status de cada link y su statusMessage
//   if(está roto){
//     muestra un mensaje
//   } else {
//     mostrar otro mensaje
//   }
// }else if (la opcion es stats){
//   llamar a la funcion que cuenta links
// }
// } 

   
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
               
              }
            })
          }
        })
      }
    })
    
  }
  readDirectory();
}

module.exports.readLinks = readLinks;
