import { ProcessState } from "./models/Processes";

export const processStateList: ProcessState[] = [
    {
        btnState: "Done",
        headerState: "Select Function",
        statusState: "Choose the functions you wish to apply:",
        processState: "check-list",       
    },
    {
        btnState: "Stop",
        headerState: "Validation",
        statusState: "Functions are being validated:",
        processState: "process-list",       
    },
    {
        btnState: "Restart",
        headerState: "Report",
        statusState: "Validation Complete! Your files are being downloaded.",
        processState: "item-list",       
    },
]