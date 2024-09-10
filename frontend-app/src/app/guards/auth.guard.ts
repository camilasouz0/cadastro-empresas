import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const permissionBase64 = localStorage.getItem('fakeJWT');

    if (permissionBase64) {
      const decodedPermission = atob(permissionBase64);

      const fakeUser = 'admin'
      const fakePassword = 'Admin@'
      if (decodedPermission === `${fakeUser}:${fakePassword}`) {
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
