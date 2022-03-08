export interface SentProcesses {
    sentProcesses:
    {
        processValue: string;
        processChecked: boolean;
    } []
}

export interface ReceivedProcesses {
    receivedProcesses: [];
}

export interface ProcessState {
    btnState: string; 
    headerState: string;
    statusState: string;
    processState: string;
}