import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subscriber, Subscription, BehaviorSubject } from 'rxjs';
import { Authentication } from '../models/Authentication';
import { ClickEvent } from "../models/ClickEvent";
import { ProcessState, SentProcesses } from '../models/Processes';
import { RefreshConfig } from "../models/RefreshConfig";
import { processStateList } from "../ProcessStateData";
import { SendFunctionsService } from "./send-functions.service";

@Injectable({
  providedIn: 'root'
})
export class ShareStateService {
  requestParserSubscription!: Subscription;
  @Output() btnClick = new EventEmitter<any>();
  clickEventSubscription! : Subscription;
  progressStateClickEventSubscription!: Subscription;
  @Output() sendEvent = new EventEmitter<any>();
  processStateListIndex: number = 0;
  processState: ProcessState = processStateList[0];
  receivedProcessStatusList!: string[];
  btnClickSubscription!: Subscription;
  sendFunctionsSubscription!: Subscription;
  sendEventSubscription!: Subscription;
  processStatusList = new EventEmitter<string[]>();
  processStatusListSubscription!: Subscription;
  @Output() processCompletion = new EventEmitter<ProcessState>();
  processCompletionSubscription!: Subscription;
  processBtnCompletionSubscription!: Subscription;
  processHeaderCompletionSubscription!: Subscription;
  authenticateUserSubscription!: Subscription;
  authenticateCookiesUserSubscription!: Subscription;
  authenticationResult: Authentication = {isAuthenticated: false}
  processBtnStatus$ = new BehaviorSubject<boolean>(true);


  constructor( private sendFunctions: SendFunctionsService ) { }

  public indexLoop(list: ProcessState[]): void {
    if (this.processStateListIndex < 2) {
      ++this.processStateListIndex;
    }
    if (this.processStateListIndex >= 2) {
      this.processStateListIndex = 0
    }
  }
  
  public btnClickEvent() {
    this.indexLoop(processStateList);
    this.processState = processStateList[this.processStateListIndex];
  }

  

  public btnPostFunctionsSubscription(processes: SentProcesses) {
    this.btnClickSubscription = this.btnClick.subscribe(()=>{
      this.sendEvent.emit(this.sendFunctions.requestFunctions(processes));
    })
  }

  public downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type.toString() });
    var url = window.URL.createObjectURL(blob);
    var pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert('Please disable your Pop-up blocker and try again.');
    }
}

}
