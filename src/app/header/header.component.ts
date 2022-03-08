import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ClickEvent } from "../models/ClickEvent";
import { ShareStateService } from "../services/share-state.service";
import { processStateList } from "../ProcessStateData";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerText: string = this.shareState.processState.headerState;
  statusText: string = this.shareState.processState.statusState;
  
  constructor( private shareState: ShareStateService) { }

  ngOnInit(): void {
    this.changeHeaderState();
  }
  
  changeHeaderState(): void {
    this.shareState.btnClick.subscribe(() => {
      this.headerText = this.shareState.processState.headerState;
      this.statusText = this.shareState.processState.statusState;
      this.processCompletion();
    })
  }

  processCompletion(): void {
    this.shareState.processHeaderCompletionSubscription = this.shareState.processCompletion.subscribe((process) => {
      
      this.headerText = process.headerState;
      this.statusText = process.statusState;
    })
  }

}

