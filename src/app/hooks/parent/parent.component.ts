import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  color: string = 'red';
  constructor() {}

  ngOnInit() {}
  changeColor(c: string) {
    if (c) {
      this.color = c;
    }
  }
}
