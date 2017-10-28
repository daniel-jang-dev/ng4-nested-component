import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component {

  name = new FormControl('', Validators.required);

  constructor() { }

  isValid() {
    return this.name.valid;
  }

  getValue() {
    return this.name.value;
  }

}
