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
    path: 'addproduct',
    loadComponent: () =>
      import('./addproduct/addproduct').then((m) => m.Addproduct),
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
];

