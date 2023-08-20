import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() childColor: string | undefined;
  @ViewChild('child') color!: ElementRef;
  constructor() {
    console.log('Constructor called...');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called...');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }
}
