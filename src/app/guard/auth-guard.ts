
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';




export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject the Router service




  const isAuthenticated = localStorage.getItem('authToken') !== null;




  // // normal guard




  if (isAuthenticated) {
    // If authenticated, allow access to the route
    return true;
  } else {
    // If not authenticated, redirect to the login page
    router.navigate(['']); // Adjust the route as needed
    return false;
  }
};



