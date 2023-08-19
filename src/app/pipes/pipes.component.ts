import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  search: string = '';
  employees = [
    {
      name: 'John',
      department: 'Sales',
      salary: 1000,
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    {
      name: 'Jane',
      department: 'Marketing',
      salary: 2000,
      email: 'jane@example.com',
      phone: '234-567-8901',
    },
    {
      name: 'Dave',
      department: 'Sales',
      salary: 1500,
      email: 'dave@example.com',
      phone: '345-678-9012',
    },
    {
      name: 'Doe',
      department: 'Marketing',
      salary: 2500,
      email: 'doe@example.com',
      phone: '456-789-0123',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
