"use strict";

const fs = require("fs");

class parsedXML {
  constructor(data) {
    this.data = data
  }
}

function init() {
  fs.readFile("testData.txt", (err, data) => {
    console.log(data.toString())
  })
}
init()
