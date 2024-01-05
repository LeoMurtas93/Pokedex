import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const loggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const snackBar = inject(MatSnackBar)
  const router = inject(Router)


  
  if (!authService.isUserLogged) {
    router.navigate(['/login']);
    snackBar.open('Per accedere ai catturati devi effettuare il Log In', 'OK');
    return false;
  }
  return true;
};
