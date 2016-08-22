`use strict`

const OPD_Calls = require("./PD_Data/OPDCalls");
const OPD_JSONData = require("./PD_Data/OPD_OfficerContactInfo");

OPD_Calls();

OPD_JSONData("oak026568.pdf", "OPD_OfficerContactInfo.json");

OPD_JSONData("oak059916.pdf", "OPD_Personnel.json");

OPD_JSONData("oak058790.pdf", "OPD_StopStats.json");

OPD_JSONData("oak059917.pdf", "OPD_UseOfForceStats.json");

OPD_JSONData("oak059915.pdf", "OPD_InternalAffairsStats.json");