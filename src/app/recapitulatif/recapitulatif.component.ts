import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  constructor() { }

  @Input() client: Client;

  
  ngOnInit(): void {
    
  }

}
