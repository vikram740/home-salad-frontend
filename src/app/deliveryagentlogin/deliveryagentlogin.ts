import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../service/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deliveryagentlogin',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './deliveryagentlogin.html',
  styleUrl: './deliveryagentlogin.scss',
})

export class Deliveryagentlogin {
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
login(){
  if(this.loginForm.invalid)
  {
    this.submitted=true;
    return
  }
  else{
    this.auth.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigate(['userdashboard']);
      },
      error: (err) => {
           this.router.navigate(['/register'])
        console.log(err);

      }
    })
 
  }
}

}
