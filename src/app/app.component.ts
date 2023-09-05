// Angular Component
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularprac1';

  addVal: any[] = [];
  editMode: boolean = false;
  index: any;

  newForm = new FormControl();

  getAdd() {
    const newData = this.newForm.value;
    if (this.editMode) {
      this.addVal[this.index].name = newData;
      this.editMode = false;
    } else {
      this.addVal.push({
        name: newData,
      });
    }
    this.newForm.reset();
  }

  removeData() {
    this.addVal.pop(); // Remove the last item from the array
  }

  onDeleteItems(c: any) {
    this.addVal.splice(c, 1);
  }

  onEditItems(d: any) {
    this.editMode = true;
    this.index = d;
    this.newForm.setValue(this.addVal[d].name);
  }
}
