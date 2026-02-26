import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  let token: string | null = null;
  if (isBrowser) {
    token = localStorage.getItem('token');
  }

  // console.log('--- Auth Interceptor ---');
  // console.log('Request URL:', req.url);
  // console.log('Context:', isBrowser ? 'Browser' : 'Server');
  // console.log('Auth Token Found:', !!token);

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token.trim()}`
      }
    });
    console.log('Authorization header successfully attached');
    return next(authReq);
  }

  if (isBrowser) {
    console.warn('No authentication token available in localStorage');
  }

  return next(req);
};
