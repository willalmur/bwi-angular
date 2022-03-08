import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClickEvent } from "../models/ClickEvent";
import { ShareStateService } from "../services/share-state.service";
import { processStateList } from "../ProcessStateData";
import { sha1 } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  checkList: boolean = true;
  progressList: boolean = false;
  itemList: boolean = false;

  constructor( private shareState: ShareStateService) { }

  ngOnInit(): void {
    this.changeProcessState();

  }

  changeProcessState(): void {
    this.shareState.clickEventSubscription = this.shareState.btnClick.subscribe(() => {
      if (this.shareState.processState.processState === "check-list") {
        this.checkList = true;
        this.progressList = false;
        this.itemList = false;
      }
      else if (this.shareState.processState.processState === "process-list") {
        this.checkList = false;
        this.progressList = true;
        this.itemList = false;
      }
      this.processCompletion();
    })
  }

  processCompletion(): void {
    this.shareState.processCompletionSubscription = this.shareState.processCompletion.subscribe((process) => {
      if (process.processState === "item-list") {
        this.checkList = false;
        this.progressList = false;
        this.itemList = true;
      }
    })
  }

}
