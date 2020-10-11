import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {

  constructor() { }

  filterBar: FormGroup = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    minPrice: new FormControl(""),
    maxPrice: new FormControl(""),
  });

  ngOnInit(): void {
  }

}
