#!/usr/bin/env node
//console.log("hola estoy sirviendo");
 const readLinks = require("./index.js")
// const rLinks=("./README.md")
const file= process.argv[2];
console.log(file);
const validate= process.argv[3];

readLinks.readLinks(file,validate);


