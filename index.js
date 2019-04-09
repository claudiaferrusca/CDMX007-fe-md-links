// module.exports = () => {
//   // indefinido
// };
//Requiero el File system y la ruta
//funcion para leer el readme , con utf-8 lo covierto en string, inicia la funcion con dos parametros , error y toda la data 
//si es un error que me console que ha ocurrido un error
//Despues viene la variable para detectar url  y si url no es igual a error consoleame el resultado
 const fs = require("fs");
 const path = require ("path");
 const fetch = require ("node-fetch")

 const readLinks = (file , validate) => {
   console.log(file);
  fs.readFile(file,"utf-8", function (err,data) {
    console.log('asdds')
    if (err) {
      // return console.log(err);
    } else {
      getLinks(file, data, validate)
    }
  }) 
}
const dataFetch = async(url,file, text)=>{
  console.log(url);
  const resultData = await fetch (url)
  .then(data => data)
  .catch (err => console.log("no es una url", url))
  if(resultData === undefined){
  return console.log ("no tuvimos respuesta")
} else {
  // console.log(resultData)2
  console.log(`${file}-${resultData.url}-${resultData.statusText}-${resultData.status}-${text}`)

}
}
 const getLinks = (file, data , validate) =>{

  //  const urlRegex = /(https?:\/\/[^\s]+)/g;
   const allLinks=  /\[([^\[\]]+)\]\(([^)]+)/g;
   const result = data.match (allLinks);

   const link = /\(([^)]+)/ ;//agarra unicamente el link
   const text = /\[([^\(([^)]+)/;//obtiene el texto
   result.forEach(element => {
     const coincidenceLink = element.match(link);
     const coincidenceText = element.match(text);
     const sliceText= coincidenceText[1].slice(0,-1);
if (validate){
  dataFetch(coincidenceLink[1],file,sliceText)
} else {
  console.log(`${file} - ${coincidenceLink[1]} - ${sliceText}`)
}

})


   //indicarle en los corchetes falta cerrar el ) para que pueda leer todo el link
   //match para obeter lo que manda la expre regular
    //  if (allLinks != null) {
    //  }
    //  console.log(result)
 }
 //se exporta la funcion de leer links para ocupara en otros modulos.
//  readLinks()
 const readDirectory = ()=>{
   
   // leer el directorio , entra al readme y dos parametros err o files.
   //despues de consolear el error, entonces files, por cada elemento ejecuta la funcion  de leer carpetas
   //si elemento es excatamente igual a .md entonces el elemnto lo haga string, entonces vamos a leer todos los links de todos los archivos 
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
                // readLinks(data)
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
  module.exports = {
    readLinks,
    dataFetch,
    getLinks,
    readDirectory,


  }