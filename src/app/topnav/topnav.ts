import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../service/auth';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topnav.html',
  styleUrl: './topnav.scss',
})
export class Topnav implements OnInit {
  router = inject(Router);
  auth = inject(Auth);

  role: string | null = null;
  userName: string = 'Guest';

  ngOnInit() {
    this.updateUserStatus();

    // Refresh user status on every navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateUserStatus();
    });
  }

  updateUserStatus() {
    this.role = this.auth.getRole();
    const userStr = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        this.userName = user.name || user.firstName || 'User';
      } catch (e) {
        console.error('Error parsing user data', e);
      }
    } else {
      this.userName = 'Guest';
    }
  }

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    this.role = null;
    this.userName = 'Guest';
    this.router.navigate(['/']);
  }
}
