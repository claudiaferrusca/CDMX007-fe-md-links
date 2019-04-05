const fetch = require('node-fetch');
const readLinks = require("./index.js")
const rLinks=("./README.md")
//no hacer caso
function checkStatus(res) {
    if (res.ok) { 
        return res;
    } else {
        return res
    }
}
 
fetch('./')
    .then(checkStatus)
    .then(res => console.log('no hay nada'))




   const validate = function(urlRegex) {
        for (let i = 0; i < urlRegex.length; i++) {
          fetch(urlRegex[i])
            .then(response =>
              console.log(`Text: ${urlRegex[i]}\nResponse code: ${response.status}\nResponse: ${response.statusText}\n`))
        }
      }

