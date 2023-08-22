import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
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
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  @Input() childColor: string | undefined;
  @Output() childData = new EventEmitter<string>();
  @ViewChild('demo') demo!: ElementRef;
  color: string = '';

  // 1 constructor is called first
  constructor() {
    console.log('1. Constructor called...');
  }

  // 2 ngOnChange excuted when change in Input property decorator
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges called...');
    console.log(changes);
    this.color = changes.childColor.currentValue;
  }
  // 3 ngInit excuted once in componet life.
  ngOnInit() {
    console.log('3. ngOnInit called...');
  }
  //4. ngDoCheck excuted every time when the chage is detcted...
  ngDoCheck(): void {
    console.log('4. ngDoCheck called...');
  }

  // 5. ngAfterContentInit excuted once after content projection
  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit called...');
  }

  //6. ngAfterContentChecked excuted every time projected contet is chaged.
  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked called...');
  }
  sendToParent() {
    this.childData.emit('Suraj');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit called...');
  }
}
