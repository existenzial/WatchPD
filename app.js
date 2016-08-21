`use strict`

const OPD_Calls = require("./PD_Data/OPDCalls");
const OPD_JSONData = require("./PD_Data/OPD_OfficerContactInfo");

OPD_Calls();

OPD_JSONData("./PD_Data/pdf/OPD_OfficerContactInfo.pdf", "./PD_Data/json/OPD_OfficerContactInfo.json");

OPD_JSONData("OPD_StopStats_Dec2015.pdf", "./PD_Data/json/OPD_StopStats.json");

OPD_JSONData("OPD_UseOfForceStats_May2016.pdf", "./PD_Data/json/OPD_UseOfForceStats.json");