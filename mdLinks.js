//mi global d e leer los links
const readLinks = require("./index.js")

const rLinks=("./README.md")

const getLinks = (file, data , validate, callback) =>{

    //  const urlRegex = /(https?:\/\/[^\s]+)/g;
     const allLinks=  /\[([^\[\]]+)\]\(([^)]+)/g;
     const result = data.match(allLinks);
  
     const link = /\(([^)]+)/ ;//agarra unicamente el link
     const text = /\[([^\(([^)]+)/;//obtiene el texto
     result.forEach(element => {
       const coincidenceLink = element.match(link);
       const coincidenceText = element.match(text);
       const sliceText= coincidenceText[1].slice(0,-1);
  if (validate){
    callback(coincidenceLink[1],file,sliceText)
  } else {
    console.log(`${file} - ${coincidenceLink[1]} - ${sliceText}`)
  }
  
  })
}  
module.exports.getLinks= getLinks;