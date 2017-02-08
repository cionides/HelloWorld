import { Injectable } from '@angular/core';

let people = [
  {
    id: 1,
    name: 'Hermione',
    city: 'London'

  },
  {
    id: 2, 
    name: 'Harry',
    city: 'London'
  },
  {
    id: 3,
    name: 'Ron',
    city: 'London'
  },
];

@Injectable()
export class PersonService {

  private people;
  constructor() {
    this.people = people;
  }

  getPeople() {
      return this.people;
  }  
}
