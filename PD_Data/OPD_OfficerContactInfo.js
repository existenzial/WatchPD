`use strict`

const fs = require("fs");
const request = require("request");

const PDFParser = require("../node_modules/pdf2json/PDFParser");
const pdfParser = new PDFParser();

module.exports = function (input, output) {

  var pdfPipe = request({
    url: `http://www2.oaklandnet.com/oakca1/groups/police/documents/webcontent/${input}`,
    headers: {
      'Content-Type': 'application/pdf'
    },
    encoding: null }).pipe( pdfParser );

  pdfPipe.on( "pdfParser_dataError", err => console.error(err) );
  pdfPipe.on( "pdfParser_dataReady", pdf => {
    fs.writeFile( `./PD_Data/json/${output}`, JSON.stringify(pdf) );
    console.log( JSON.stringify(pdf) );
  });

};