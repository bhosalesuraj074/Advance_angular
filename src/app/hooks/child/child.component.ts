import {
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() childColor: string | undefined;
  @ViewChild('child') color!: ElementRef;
  @Output() childData = new EventEmitter<string>();

  // 1 constructor is called first
  constructor() {
    console.log('1. Constructor called...');
  }
  // 2 ngOnChange excuted when change in Input property decorator
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges called...');
    console.log(changes);
  }
  // 3 ngInit excuted once in componet life.
  ngOnInit() {
    console.log('3. ngOnInit called...');
  }
  //4. ngDoCheck excuted every time when the chage is detcted...
  ngDoCheck(): void {
    console.log('4. ngDoCheck called...');
  }

  sendToParent() {
    this.childData.emit('Suraj');
  }
}
