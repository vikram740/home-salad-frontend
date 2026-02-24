import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-register',
  imports:  [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
registerForm!:FormGroup
  submitted=false
  fb=inject(FormBuilder)
  auth=inject(Auth)
  router=inject(Router)
activeTab: string = 'login';

ngOnInit(){
  this.registerForm=this.fb.group({
    name:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required]),
    confirmpassword:new FormControl('',[Validators.required]),
  })
}
register() {
  this.submitted = true;

  if (this.registerForm.invalid) {
    return;
  }

  const value = this.registerForm.getRawValue();

  if (value.password !== value.confirmpassword) {
    alert("Passwords do not match");
    return;
  }

  const payload = {
    name: value.name,
    phone: value.phone,
    email: value.email,
    password: value.password,
    role: "customer"
  };

  this.auth.createAccout(payload).subscribe({
    next: (res: any) => {
      console.log(res);
      this.router.navigate(['/otp'],{
        queryParams :{email:this.registerForm.value.email}
      });
    },
    error: (err) => {
      console.log(err);
      alert(err.error.message);
    }
  });
}



}


