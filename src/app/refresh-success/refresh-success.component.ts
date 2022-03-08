import { Component, OnInit } from '@angular/core';
import { ShareStateService } from "../services/share-state.service";

@Component({
  selector: 'app-refresh-success',
  templateUrl: './refresh-success.component.html',
  styleUrls: ['./refresh-success.component.css']
})
export class RefreshSuccessComponent implements OnInit {

  constructor( private shareState: ShareStateService ) { }

  ngOnInit(): void {
    this.shareState.requestParserSubscription.unsubscribe()
  }

}
