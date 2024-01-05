import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterDto } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model = new RegisterDto();
  errorMessage = ""
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private snackBar: MatSnackBar){}

  register(){
    this.authService.register(this.model).
    pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorMessage = error.error;
        return of(undefined)
      })
    )
    .subscribe(user => {
      if(user){
        this.snackBar.open("Registrazione avvenuta con successo!", "OK")
        this.router.navigate(['/login'])
      }
    })
  }


}
