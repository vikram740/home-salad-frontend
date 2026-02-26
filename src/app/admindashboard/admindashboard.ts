import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { Common } from '../service/common';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-admindashboard',
    standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.scss',
})
export class Admindashboard {
 common = inject(Common);
  private platformId = inject(PLATFORM_ID);
  cdr = inject(ChangeDetectorRef);

  TotalCustomers = 0;
  TotalDelivery = 0;
  ActiveSubscriptions = 0;
  MonthlyRevenue = 0;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.adminDashboard();
    }
  }

  adminDashboard() {
    this.common.getAdminDashboard().subscribe({
      next: (res: any) => {
        const data = res.data || res;
        console.log('data', data)

        this.TotalCustomers = data.totalCustomers || 0;
        console.log('this.TotalCustomers', this.TotalCustomers)
        this.TotalDelivery = data.totalDelivery || 0;
        console.log('this.TotalDelivery', this.TotalDelivery)
        this.ActiveSubscriptions = data.activeSubscriptions || 0;
        console.log('this.ActiveSubscriptions', this.ActiveSubscriptions)
        this.MonthlyRevenue = data.monthlyRevenue || 0;
        console.log('this.MonthlyRevenue', this.MonthlyRevenue)

        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Failed to fetch dashboard stats:', err);
      }
    });
  }

}
