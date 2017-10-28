import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  number = new FormControl('', Validators.required);

  constructor() { }

  isValid() {
    return this.number.valid;
  }

  getValue() {
    return this.number.value;
  }

}
