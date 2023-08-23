import { Component, OnInit } from '@angular/core';
import { RapidService } from '../pipes & services/rapid.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css'],
})
export class RapidComponent implements OnInit {
  constructor(private rapid: RapidService) {}

  ngOnInit() {

    this.rapid.getAllCakes().subscribe(res=>{
      console.log('cake list', res)
    })
  }
}
