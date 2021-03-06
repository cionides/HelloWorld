import { Person } from '../model/person'
import { PersonService } from '../model/person.service'
import { Component, OnInit } from '@angular/core';

@Component({
  providers: [PersonService],
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
  
export class PersonListComponent implements OnInit {

  people: Person[];
  selectedPerson: Person;
  
  constructor(private personService: PersonService) {
    this.people = this.personService.getPeople();
  }

  ngOnInit() {
  }

   onSelect(person: Person) { this.selectedPerson = person; }
}
