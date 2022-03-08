import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetFunctionsService } from '../services/get-functions.service';
import { ClickEvent } from "../models/ClickEvent";
import { ShareStateService } from "../services/share-state.service";
import { SendFunctionsService } from "../services/send-functions.service";
import { SentProcesses } from "../models/Processes";
import { Observable, Subscriber, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  processes: SentProcesses = 
  {
    sentProcesses: [
      {
        processValue: "", 
        processChecked: false
      }
    ]
  };
  disableBtn: boolean = true;
  btnEventSubscription!: any;
  getFunctionSubscription!: Subscription;
  checkCount: number = 0


  constructor(private getFunctions: GetFunctionsService, private shareState: ShareStateService, private sendFunctions: SendFunctionsService) {
  }

  ngOnInit(): void { 
    this.getCheckList();
    if(this.checkCount == 0){
      this.shareState.processBtnStatus$.next(true)
    }
    this.shareState.btnPostFunctionsSubscription(this.processes);
    this.shareState.sendEventSubscription = this.shareState.sendEvent.subscribe((requestFunctions:Observable<string[]>)=>{
      this.shareState.sendFunctionsSubscription = requestFunctions.subscribe((processStatus:string[])=>{
        this.shareState.processStatusList.emit(processStatus);
      });
    })
  }

  onCheck($event: any) {
    this.processes.sentProcesses.filter(val => {
      if(val.processValue === $event.target.value) {
        val.processChecked = $event.target.checked;
      }
      this.checkCount = 0;
      this.processes.sentProcesses.forEach(sentProcess => {
        if(sentProcess.processChecked == true){
          ++this.checkCount
        }
      });
      if(this.checkCount == 0){
        this.shareState.processBtnStatus$.next(true)
      }
      if(this.checkCount> 0){
        this.shareState.processBtnStatus$.next(false)
      }
    })
  }

  getCheckList(): void {
    const checked: boolean = false;
    this.getFunctionSubscription = this.getFunctions.getFunctions().subscribe((val) => (this.processes.sentProcesses = val.receivedProcesses.map(value => {
      const name: string = value; 
      return {
        processValue: name.substring(0, name.length-3),
        processChecked: checked
      };
    })));
  }
  
}
