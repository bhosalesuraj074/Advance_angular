import {
  AfterContentInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  color: string = 'red';
  child: string = '';
  counter: number = 0;
  constructor() {}

  ngOnInit() {}
  changeColor(c: string) {
    if (c) {
      this.color = c;
      ++this.counter;
    }
  }

  demo(event: any) {
    console.log(event);
    this.child = event;
  }
}
