import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild(Child1Component) child1: Child1Component;
  @ViewChild(Child2Component) child2: Child2Component;

  constructor() { }

  ngOnInit() {
  }

  isValid() {
    return this.child1.isValid() && this.child2.isValid();
  }

  getValue() {

    return {
      'child1': this.child1.getValue(),
      'child2': this.child2.getValue()
    }
  }

}
