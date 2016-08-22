`use strict`

const OPD_Calls = require("./PD_Data/OPDCalls");
const OPD_JSONData = require("./PD_Data/OPD_OfficerContactInfo");

OPD_Calls();

OPD_JSONData("http://www2.oaklandnet.com/oakca1/groups/police/documents/webcontent/oak026568.pdf", "OPD_OfficerContactInfo.json");

OPD_JSONData("http://www2.oaklandnet.com/oakca1/groups/police/documents/webcontent/oak059916.pdf", "OPD_Personnel.json");

OPD_JSONData("http://www2.oaklandnet.com/oakca1/groups/police/documents/webcontent/oak058790.pdf", "OPD_StopStats.json");

OPD_JSONData("http://www2.oaklandnet.com/oakca1/groups/police/documents/webcontent/oak059917.pdf", "OPD_UseOfForceStats.json");

OPD_JSONData("http://www2.oaklandnet.com/oakca1/groups/police/documents/webcontent/oak059915.pdf", "OPD_InternalAffairsStats.json");