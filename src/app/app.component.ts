import { Component, ViewChildren, QueryList } from '@angular/core';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChildren(ContainerComponent) children: QueryList<ContainerComponent>;

  array = [1, 3];
  title = 'Angular !';

  isValid() {
    if (this.children) {
      return !this.children.some(child => !child.isValid());
    }
    return false;
  }

  save() {
    this.children.forEach(child => console.log(child.getValue()));
  }
}
