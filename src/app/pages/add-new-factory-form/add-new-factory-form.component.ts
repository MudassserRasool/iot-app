import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-factory-form',
  templateUrl: './add-new-factory-form.component.html',
  styleUrls: ['./add-new-factory-form.component.scss'],
})
export class AddNewFactoryFormComponent {
  name = new FormControl('', [Validators.required]);
  currency = new FormControl('', [Validators.required]);
  timeZone = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  performance = new FormControl('', [Validators.required]);
  availability = new FormControl('', [Validators.required]);
  quality = new FormControl('', [Validators.required]);
  oEE = new FormControl('', [Validators.required]);
  kwCost = new FormControl('', [Validators.required]);
  factoryType = new FormControl('', [Validators.required]);
  createdBy = new FormControl('', [Validators.required]);

}
