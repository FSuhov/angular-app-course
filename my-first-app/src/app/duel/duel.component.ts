import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  girlName = '';
  girls = ['Tanya', 'Goldie', 'Ashley'];

  constructor() { }

  ngOnInit() {
  }

  onAddGirl() {
    this.girls.push(this.girlName);
  }
}
