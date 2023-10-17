import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  hidePassword = true;
  errorMessage = ''; // Declare the errorMessage property here

  togglePasswordVisibility(input: any): void {
    input.type = this.hidePassword ? 'text' : 'password';
    this.hidePassword = !this.hidePassword;
  }

  onLoginButtonClick(): void {
    // Check if any input field is invalid
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid) {
      this.errorMessage = 'Please enter valid data in all fields.';
      return;
    }

    // Continue with login logic
    this.errorMessage = ''; // Clear any previous error message
    // Your login logic here...
  }
}
