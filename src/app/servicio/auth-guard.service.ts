import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private authService:AuthenticationService
  ) { }

  canActivate():boolean {
     return this.authService.isAuthenticated();
  }

}
