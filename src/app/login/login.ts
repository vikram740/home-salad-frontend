
import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { Auth } from '../service/auth';


@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm!:FormGroup
  submitted=false
  fb=inject(FormBuilder)
  router=inject(Router)
  auth=inject(Auth)


ngOnInit(){
  this.loginForm=this.fb.group({
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required])
  })
}
login() {
  if (this.loginForm.invalid) {
    this.submitted = true;
    return;
  }

  this.auth.login(this.loginForm.value).subscribe({
    next: (res: any) => {
      console.log(res);

      // ✅ Extract data correctly
      const token = res.data.token;
      const user = res.data.user;
      const role = user.role;

      // ✅ Store auth data
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(user));

      // ✅ Role-based navigation
      switch (role) {
        case 'customer':
          this.router.navigate(['/userDashboard']);
          break;

        case 'delivery':
          this.router.navigate(['/deliverydashboard']);
          break;

        case 'admin':
          this.router.navigate(['/adminDashboard']);
          break;

        default:
          this.router.navigate(['/']);
      }
    },
    error: (err) => {
      console.error(err);
      this.router.navigate(['/register']);
    }
  });
}


}

