`use strict`

const fs = require("fs");
const PDFParser = require("../node_modules/pdf2json/PDFParser");
//const pdfParser = new PDFParser();

module.exports = function (input, output) {

  input = fs.createReadStream( input, { bufferSize: 64 * 1024 });
  output = fs.createWriteStream( output );

  input.pipe( new PDFParser() ).pipe( JSON.stringify() ).pipe( output );

  console.log(output);

  /***********************
  ALTERNATE PARSING METHOD
  **********************
  pdfParser.loadPDF("./pdf/OPD_OfficerContactInfo.pdf");

  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));

  pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./OPD_OfficerContactInfo.json", JSON.stringify(pdfData));
    console.log(JSON.stringify(pdfData));
  });
  ************************/
};