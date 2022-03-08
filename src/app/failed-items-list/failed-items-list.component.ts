import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failed-items-list',
  templateUrl: './failed-items-list.component.html',
  styleUrls: ['./failed-items-list.component.css']
})
export class FailedItemsListComponent implements OnInit {
  processes: string[] = ['function 0', 'function 1', 'function 2', 'function 3', 'function 4', 'function 5', 'function 6' , 'function 7', 'function 8', 'function 9', 'function 10']

  constructor() { }

  ngOnInit(): void {
  }

}
