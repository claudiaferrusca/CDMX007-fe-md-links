// module.exports = () => {
//   // indefinido
// };

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch")
const links = require("./mdlinks");

//lee los links y los valida
const readLinks = (file, validate) => {
  //  console.log(file);
  fs.readFile(file, "utf-8", function (err, data) {
    console.log('asdds')
    if (err) {
      // return console.log(err);
    } else {
      links.getLinks(file, data, validate, dataFetch);
    }
  })
}
// dataFetch espera la promesa de resolver y rechazar, entonces si el resultData resuelvelo y si no traeme el error
const dataFetch = async (url, file, text) => {
  console.log(url);
  const newPromise = await new Promise((resolve, reject) => {
    fetch(url)
      .then(resultData => {
        console.log(`${file} ${resultData.url} ${resultData.statusText} ${resultData.status} ${text}`)
        resolve(resultData);
      })
      .catch(err => console.log("404 - no entra nunca al servidor", url))
  });

  //   console.log("nuevapromesa: ", newPromise)
  // //const resultData = await newPromise
  // console.log("resultData: ", resultData)
  // console.log("resultDatito")

  //stats si ambos son true mandame la estadistica
  if (options.validate && options.stats) {
    console.log("estadistica");
    let totalLinks = 0;
    let countUnique = 0;
    for (let i = 0; i < resultData.length; ++i) {
      unique++;
      for (let j = i + 1; j < resultData.lenght; j++) {
        if (resultData[i] !== resultData[j]) {
          countUnique++
        }
        return console.log(totalLinks)
      }

    }
    //para validar , haces la peticion a fetche, por cada elemento consoleame ----si es null =broken, si no el resultdado
    if (options.validate) {
      result.forEach(element => {
        console.log(`${resultData.status}-${resultMessage.status}`)
        if (resultData === null) {
          console.log("Broken")
        } else {
          console.log("Links")
        } if (options.stats) {
          //   llamar a la funcion que cuenta links
          resultData()
        }

      })
    }

  }
  //le los archivos
  const readDirectory = () => {


    fs.readdir("./", (err, files) => {
      if (err) {

        console.log(err);
      } else {
        files.forEach(element => {
          if (path.extname(element) === ".md") {
            fs.readFile(element, "utf-8", (err, data) => {
              if (err) {
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
