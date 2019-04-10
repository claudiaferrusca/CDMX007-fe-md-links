#!/usr/bin/env node

 const readLinks = require("./index.js")

const file= process.argv[2];

const validate= process.argv[3];


readLinks.readLinks(file,validate);


