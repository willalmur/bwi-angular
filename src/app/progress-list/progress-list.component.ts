import { Component, OnInit } from '@angular/core';
import { ShareStateService } from "../services/share-state.service";
import { processStateList } from "../ProcessStateData";

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.css']
})
export class ProgressListComponent implements OnInit {
  processes: string[] = [''];

  constructor(private shareState: ShareStateService,) { }

  ngOnInit(): void {
    this.shareState.progressStateClickEventSubscription = this.shareState.btnClick.subscribe(()=>{
      this.shareState.sendFunctionsSubscription.unsubscribe();
      this.shareState.processStatusListSubscription.unsubscribe();
      this.shareState.progressStateClickEventSubscription.unsubscribe()
    });
    this.shareState.btnClickSubscription.unsubscribe();
    this.shareState.sendEventSubscription.unsubscribe();
    this.shareState.processStatusListSubscription = this.shareState.processStatusList.subscribe((processStatusList) => {
      this.processes = processStatusList;
      this.shareState.receivedProcessStatusList = processStatusList;
      setTimeout(() => {
        this.shareState.processCompletion.emit(processStateList[2])
      }, 3000);
    })
    
    
  }

  

}
