import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthModule } from '../auth.module';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['admin', Validators.required],
      password: ['Admin@', Validators.required]
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const fakeUser = 'admin'
      const fakePassword = 'Admin@'
      const verify1 = this.loginForm.get('username')?.value === fakeUser
      const verify2 = this.loginForm.get('password')?.value === fakePassword

      if(verify1 && verify2) {
        localStorage.setItem('fakeJWT', btoa(`${fakeUser}:${fakePassword}`))
        this.router.navigate(['/companies'])
      }

    }
  }
}
