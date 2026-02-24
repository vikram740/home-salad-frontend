import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../service/auth';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './otp.html',
  styleUrl: './otp.scss',
})
export class Otp {
 route = inject(ActivatedRoute);
  router = inject(Router);
  auth = inject(Auth);

  email!: string;
  otpForm!: FormGroup;

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });

    // ✅ FIXED FormControl syntax
    this.otpForm = new FormGroup({
      otp: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{6}$') // only 6 digit number
      ])
    });
  }

  verifyOtp() {

    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
      return;
    }

    const value = this.otpForm.getRawValue();

    const payload = {
      email: this.email,
      otp: value.otp
    };

    this.auth.verify(payload).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
