import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-equipment',
  templateUrl: './add-new-equipment.component.html',
  styleUrls: ['./add-new-equipment.component.scss'],
})
export class AddNewEquipmentComponent {
  equipmentId = new FormControl('', [Validators.required]);
  serialNumber = new FormControl('', [Validators.required]);
  factory = new FormControl('', [Validators.required]);
  group = new FormControl('', [Validators.required]);
  equipmentType = new FormControl('', [Validators.required]);
  setUpMints = new FormControl('', [Validators.required]);
  sortOrder = new FormControl('', [Validators.required]);
  make = new FormControl('', [Validators.required]);
  model = new FormControl('', [Validators.required]);
  year = new FormControl('', [Validators.required]);
  availabilityThreshold = new FormControl('', [Validators.required]);
  qualityThreshold = new FormControl('', [Validators.required]);
  tonnage = new FormControl('', [Validators.required]);
  deviceId = new FormControl('', [Validators.required]);
  
}
