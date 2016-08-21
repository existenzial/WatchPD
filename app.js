//Converter Class
const Converter = require("csvtojson").Converter;
const converter = new Converter({});
const ftp = require("ftp-get");

ftp.get({
    url: 'ftp://crimewatchdata.oaklandnet.com/crimePublicData.csv',
    bufferType: 'buffer'
}, function (error, result) {
    if (error) {
        console.error(error);
    } else {
      result = result.toString();
      converter.fromString(result, function(err, res){
        //console.log('The CSV contents: ' + JSON.stringify(res));
      });
    }
});

//record_parsed emits each csv row
converter.on("record_parsed", function (policeDataObj) {
   console.log( policeDataObj ); //parsed csv data
});
