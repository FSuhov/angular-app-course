import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gladiatrix',
  templateUrl: './gladiatrix.component.html',
  styleUrls: ['./gladiatrix.component.css']
})
export class GladiatrixComponent implements OnInit {
  girlName = '';
  allowNewGirl = false;
  constructor() {
    
   }

  ngOnInit() {
  }

  onAddGirl(){
    this.girlName = '';
  }

}
