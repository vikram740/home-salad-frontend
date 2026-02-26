import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then((m) => m.Register),
  },
  {
    path: 'otp',
    loadComponent: () => import('./otp/otp').then((m) => m.Otp)
  },
  {
    path: 'userDashboard',
    loadComponent: () =>
      import('./userdashboard/userdashboard').then((m) => m.Userdashboard),
  },
  {
    path: 'adminAddproduct',
    loadComponent: () =>
      import('./adminaddproduct/adminaddproduct').then((m) => m.Adminaddproduct),
  },
  {
    path: 'userplan',
    loadComponent: () => import('./userplan/userplan').then((m) => m.Userplan),
  },
  {
    path: 'usereditplan',
    loadComponent: () =>
      import('./usereditplan/usereditplan').then((m) => m.Usereditplan),
  },
  {
    path: 'userproduct',
    loadComponent: () =>
      import('./userproduct/userproduct').then((m) => m.Userproduct),
  },
  {
    path: 'adminDashboard',
    loadComponent: () =>
      import('./admindashboard/admindashboard').then((m) => m.Admindashboard),
  },
  {   
    path: 'adminLogin',
    loadComponent: () =>
      import('./adminlogin/adminlogin').then((m) => m.Adminlogin),
  },
    {   
    path: 'adminviewcustomer',
    loadComponent: () =>
      import('./adminviewcustomer/adminviewcustomer').then((m) => m.Adminviewcustomer),
  },
    {   
    path: 'admineditcustomer',
    loadComponent: () =>
      import('./admineditcustomer/admineditcustomer').then((m) => m.Admineditcustomer),
  },
  {
    path: 'userorder',
    loadComponent: () =>
      import('./userorder/userorder').then((m) => m.Userorder),
  },
   {
    path: 'usersuccess',
    loadComponent: () =>
      import('./usersuccess/usersuccess').then((m) => m.Usersuccess),
  },
  {
    path: 'userfailure',
    loadComponent: () =>
      import('./userfailure/userfailure').then((m) => m.Userfailure),
  },
   {
    path: 'userprofile',
    loadComponent: () =>
      import('./userprofile/userprofile').then((m) => m.Userprofile),
  },
   {
    path: 'usereditprofile',
    loadComponent: () =>
      import('./usereditprofile/usereditprofile').then((m) => m.Usereditprofile),
  },
   {
    path: 'useraddaddress',
    loadComponent: () =>
      import('./useraddaddress/useraddaddress').then((m) => m.Useraddaddress),
  },
  {
    path: 'Topnav',
    loadComponent: () =>
      import('./topnav/topnav').then((m) => m.Topnav),
  },
  {
    path: 'userCheckout',
    loadComponent: () =>
      import('./usercheckout/usercheckout').then((m) => m.Usercheckout),
  },
];

