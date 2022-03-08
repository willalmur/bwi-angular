import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ClickEvent } from '../models/ClickEvent';
import { ShareStateService } from "../services/share-state.service";
import { ProcessState } from "../models/Processes";
import { processStateList } from "../ProcessStateData"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  btnText: string = this.shareState.processState.btnState;
  btnStatus: Observable<boolean> = new Observable();
  @Output() btnEvent = new EventEmitter();

  constructor( private shareState: ShareStateService) { }

  ngOnInit(): void {
    this.changeBtnState();
    this.btnStatus = this.shareState.processBtnStatus$    
  }

  onClick($event: any) {
    this.shareState.btnClickEvent();
    this.shareState.btnClick.emit();
  }

  changeBtnState(): void {
    this.shareState.btnClick.subscribe(() => {
      this.btnText = this.shareState.processState.btnState;
      this.processCompletion();
    })
  }

  processCompletion(): void {
    this.shareState.processBtnCompletionSubscription = this.shareState.processCompletion.subscribe((process) => {
      
      this.btnText = process.btnState;
    })
  }

}
