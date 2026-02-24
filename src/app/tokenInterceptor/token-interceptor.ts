
import { HttpInterceptorFn } from '@angular/common/http';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Get the token from wherever you store it (e.g., localStorage, a service, etc.)
  const token = localStorage.getItem('authToken');
  // Clone the request and add the authorization header if the token exists
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: ` Bearer ${token}`
      }
    });

    // Pass on the cloned request instead of the original request.
    return next(authReq);
  }
  return next(req);
};




