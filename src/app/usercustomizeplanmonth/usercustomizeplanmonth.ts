import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usercustomizeplanmonth',
  imports: [CommonModule],
  templateUrl: './usercustomizeplanmonth.html',
  styleUrl: './usercustomizeplanmonth.scss',
})
export class Usercustomizeplanmonth {

  isOpen = true;

  days = [
    { name: 'Mon', price: 25 },
    { name: 'Tue', price: 0 },
    { name: 'Wed', price: 0 },
    { name: 'Thur', price: 0 },
    { name: 'Fri', price: 25 },
    { name: 'Sat', price: 25 },
    { name: 'Sun', price: 25 }          
  ];
}