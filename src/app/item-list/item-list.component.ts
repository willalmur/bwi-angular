import { Component, OnInit } from '@angular/core';
import { ShareStateService } from "../services/share-state.service";
import { GetFunctionsService } from "../services/get-functions.service";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor( private shareState: ShareStateService, 
  private getFunctions: GetFunctionsService) { }

  ngOnInit(): void {
    
    this.shareState.sendEventSubscription.unsubscribe();
    this.shareState.processCompletionSubscription.unsubscribe()
    this.shareState.processBtnCompletionSubscription.unsubscribe();
    this.shareState.processHeaderCompletionSubscription.unsubscribe();
    this.shareState.sendFunctionsSubscription.unsubscribe()
    this.shareState.processStatusListSubscription.unsubscribe();
    this.getFunctions.getResults().subscribe((file: ArrayBuffer)=>{
      this.shareState.downLoadFile(file, 'application/zip');
    }, error => {
      console.log(error);
    });
  }
  
}
