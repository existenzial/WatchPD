const fs = require("fs");
const PDFParser = require("../node_modules/pdf2json/PDFParser");
const pdfParser = new PDFParser();

module.exports = function () {

  pdfParser.loadPDF("./pdf/OPD_OfficerContactInfo.pdf");

  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));

  pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./OPD_OfficerContactInfo.json", JSON.stringify(pdfData));
    console.log(JSON.stringify(pdfData));
  });

};