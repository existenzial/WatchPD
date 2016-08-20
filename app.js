//Converter Class
const Converter = require("csvtojson").Converter;
const converter = new Converter({ constructResult:false }); //for big csv data

//record_parsed will be emitted each csv row being processed
converter.on("record_parsed", function (jsonObj) {
   console.log( jsonObj ); //here is your result json object
});

require("request").get("ftp://crimewatchdata.oaklandnet.com/crimePublicData.csv").pipe(converter);
