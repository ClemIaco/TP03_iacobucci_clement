import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  client = new Client();
  @ViewChild('registerForm') clientForm: NgForm;
  formOk: Boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {  
    if (this.clientForm.valid)
    {
      this.formOk = true;
    }
  }

}
