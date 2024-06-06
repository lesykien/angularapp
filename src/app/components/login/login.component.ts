import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { _userModel, createDTOs } from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private _user: UserService,
    private router: Router
  ) {}

  LoginForm = this.form.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });
  SiginForm = this.form.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    username: ['', Validators.required],
  });
  ngOnInit(): void {}

  SumbitForm() {
    let request: any = this.LoginForm.value;
    let form: FormData = new FormData();
    form.append('psw', request.password);
    this._user.login(form, request.username).subscribe((response) => {
      if (response) {
        localStorage.setItem('id', response.id.toString());
        this.router.navigate(['/']);
      }
    });
  }

  SumbitSignin() {
    let request: any = this.SiginForm.value;
    if (request.password == request.confirm_password) {
      let model: createDTOs = _userModel.create(request);
      this._user.create(model).subscribe((response) => {
        if (response.id != 0) {
          alert('Đăng kí thành công');
          window.location.reload();
        }
      });
    }
  }
}
