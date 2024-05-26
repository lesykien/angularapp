import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private form: FormBuilder) {}

  LoginForm = this.form.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  SiginForm = this.form.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required],
  });
  ngOnInit(): void {}

  SumbitForm() {
    let request: any = this.LoginForm.value;
    console.log(request);
  }

  SumbitSignin() {
    let request: any = this.SiginForm.value;
    console.log(request);
  }
}
