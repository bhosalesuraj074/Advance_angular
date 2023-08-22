import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
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
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() childColor: string | undefined;
  @Output() childData = new EventEmitter<string>();
  @ViewChild('view') view!: ElementRef;
  @ViewChild('myButton') button!: ElementRef;
  counter: number = 0;
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
  // 7. ngAfterViewInit hook is excuted once after view and child view fully initilized.
  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit called...');
    this.view.nativeElement.style.color = 'red';
  }
  // 8. ngAfterViewInit hook is excuted after view and child view fully initilized.
  // and it executed after change is detected in the view
  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked called...', this.button);
  }

  ngOnDestroy(): void {
    console.log('9.ngOnDestroy  called...');
  }

  addCounter() {
    this.counter++;
  }
  sendToParent() {
    this.childData.emit('Suraj');
  }
}
