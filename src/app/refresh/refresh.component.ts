import { Component, OnInit } from '@angular/core';
import { ShareStateService } from "../services/share-state.service";
import { SendFunctionsService } from "../services/send-functions.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {
  btnDisabled: boolean = false;
  refreshStatus: string = "Do you wish to refresh router configuration?"

  constructor( private router: Router, private sendFunctions: SendFunctionsService, 
    private shareState: ShareStateService, ) { }

  ngOnInit(): void {
  }

  onClick($event: any) {
    if ($event.target.textContent === "YES"){
      this.btnDisabled = true;
      this.refreshStatus = "Please wait while your data is being refreshed..."
      this.onRefresh();
    }
    if ($event.target.textContent === "NO"){
      this.router.navigateByUrl("process");
    }
  }

  onRefresh() {
    this.shareState.requestParserSubscription = this.sendFunctions.requestParser().subscribe(() => {
      this.router.navigateByUrl("refresh-success");
    });
  }

}
