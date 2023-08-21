import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnChanges {
  color: string = 'red';
  child: string = '';
  constructor() {}

  ngOnInit() {}
  changeColor(c: string) {
    if (c) {
      this.color = c;
    }
  }

  demo(event: any) {
    console.log(event);
    this.child = event;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
