import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoginDto } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = new LoginDto();
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router){
  }

  login(){
    this.authService.login(this.model).pipe(
      catchError((err: HttpErrorResponse)=>{
        this.errorMessage = err.error;
        return of(undefined)
      })

    ).subscribe(loggedUser => {
      console.log("subscribe");

      if(loggedUser){
        this.authService.setLoggedUser(loggedUser);
        this.router.navigate(['']);
      }
    })
  }
}
