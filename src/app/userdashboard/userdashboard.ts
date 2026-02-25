import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Userplan } from '../userplan/userplan'; // adjust path

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [CommonModule, Userplan],
  templateUrl: './userdashboard.html',
  styleUrl: './userdashboard.scss',
})
export class Userdashboard {

  showPlans = false;

  openPlans() {
    this.showPlans = true;
  }

  closePlans() {
    this.showPlans = false;
  }
}  