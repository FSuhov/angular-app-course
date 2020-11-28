import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  girlName = '';
  girls = ['Tanya', 'Goldie', 'Ashley'];

  constructor() { }

  ngOnInit() {
  }

  onAddGirl() {
    this.girls.push(this.girlName);
  }
}