import {
    GeneralNote,
    Machinery,
    RemoteLevel,
    Telehut
} from "../models/entities";

const createDemoData = () => {
    return {
        "machineryList": [
            new Machinery("TH663-18",
                "truck",
                "breakdown",
                false,
                "Hydraulic leak at lift cylinder. Parked in workshop bay 2."),
            new Machinery("DD422i-11",
                "jumbo",
                "breakdown",
                false,
                "Percussion fault on boom 1. Troubleshooting required next shift."),
            new Machinery("LH517-01",
                "loader",
                "available",
                true,
                "Ready for day shift. No defects reported."),
            new Machinery("TH663-14",
                "truck",
                "available",
                false,
                ""),
            new Machinery("CSM-05",
                "concrete_sprayer",
                "available",
                false,
                "Shotcrete unit tested and ready."),
            new Machinery("DL421-09",
                "longhole",
                "available",
                false,
                ""),
            new Machinery("DLi421-10",
                "longhole_electric",
                "available",
                true,
                ""),
            new Machinery("LH517-02",
                "loader",
                "in_progress",
                true,
                "In workshop for fuel cap replacement."),

            new Machinery("CAT16M-03",
                "grader",
                "in_progress",
                false,
                "Operator reported slow blade response."),



        ],
        "telehutList": [

            new Telehut("TH-01",
                "1450 West",
                "running")
            ,
            new Telehut("TH-03",
                "1625 North",
                "running")
            ,
            new Telehut("TH-02",
                "Main Decline",
                "running")
        ],
        "remoteLevelList": [

            new RemoteLevel("1625 North Stope 3",
                "in_progress",
                "Communications testing in progress."),
            new RemoteLevel("1450 West Ore Drive",
                "active",
                "Loader operating normally on remote."),
            new RemoteLevel("1450 West Crosscut",
                "in_progress",
                "Remote setup underway. Needs extra set of laser at escape way."),
        ],

        "generalNoteList": [
            new GeneralNote("Preventive maintenance scheduled on all remote-capable loaders"),
            new GeneralNote("Check battery condition on all telehuts — multiple low voltage alerts recorded overnight."),
        ]
    }
}

export default createDemoData;