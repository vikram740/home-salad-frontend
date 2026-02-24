import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Otp } from './otp/otp';
import { Userdashboard } from './userdashboard/userdashboard';
import { Adminlogin } from './adminlogin/adminlogin';
import { Adminlogin1 } from './adminlogin1/adminlogin1';
import { Addproduct } from './addproduct/addproduct';
import { Userplan } from './userplan/userplan';
import { Usereditplan } from './usereditplan/usereditplan';
import { Userproduct } from './userproduct/userproduct';

export const routes: Routes = [
 { path: '', component: Login, pathMatch: 'full' },
   { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
    { path: 'register', loadComponent: () => import('./register/register').then(m => m.Register) },
  { path: 'otp', loadComponent: () => import('./otp/otp').then(m => m.Otp) },
  {path:'userDashboard',loadComponent:() => import('./userdashboard/userdashboard').then(m => m.Userdashboard)},
   //   {path:'adminlogin',loadComponent:Adminlogin},
   //   {path:'adminlogin1',component:Adminlogin1},
  {path:'addproduct',loadComponent:() => import('./addproduct/addproduct').then(m => m.Addproduct)},
  {path:'userplan',loadComponent:() => import('./userplan/userplan').then(m => m.Userplan)},
   {path:'usereditplan',loadComponent:() => import('./usereditplan/usereditplan').then(m => m.Usereditplan)},
   {path:'userproduct',loadComponent:() => import('./userproduct/userproduct').then(m => m.Userproduct)},
   {path:'adminDashboard',loadComponent:() => import('./admindashboard/admindashboard').then(m => m.Admindashboard)}
   //  {path:'myorder',loadComponent:() => import('.').then(m => m.Admindashboard)}


];
 