import { Component } from '@angular/core';

@Component({
selector: 'app-girl',
templateUrl: './girl.component.html',
styleUrls: ['./girl.component.css']
})
export class GirlComponent {
girlName = '';
girlStatus = 'naked';
logs = [];
showStatus = false;

constructor() {
  this.girlStatus = Math.random() > 0.5 ? 'naked' : 'dressed';
  this.showStatus = false;
}


  getGirlStatus() {
  return this.girlStatus;
 }

 getColor() {
  return this.girlStatus === 'naked' ? 'green' : 'red';
 }

 onToggleDetails(){
   this.showStatus = !this.showStatus;
   this.girlStatus = this.girlStatus === 'naked' ? 'dressed' : 'naked';
   this.logs.push(this.logs.length + 1 + ' ' + this.girlStatus + ' ' + new Date());
 }
}