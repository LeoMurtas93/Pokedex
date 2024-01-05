import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoggedUser, ILoginDto, RegisterDto } from '../models/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(model: ILoginDto): Observable<LoggedUser>{
    return this.http.post<LoggedUser>(`${environment.JSON_SERVER_BASE_URL}/login`, model).pipe(
      tap(dati => console.log("servizio", dati))
    );
  }

  register(model: RegisterDto): Observable<LoggedUser>{
    return this.http.post<LoggedUser>(`${environment.JSON_SERVER_BASE_URL}/register`, model)
  }

  setLoggedUser(user: LoggedUser){
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  getLoggedUser(): LoggedUser | null{
    let userStorage = localStorage.getItem("user")
    
    if(userStorage !== null){
      let u: LoggedUser = JSON.parse(userStorage)
      return u;
    }
    return null;
  }

  get isUserLogged(): boolean{
    // if(this.getLoggedUser != null){
    //   return true;
    // }else{
    //   return false;
    // }

    return this.getLoggedUser() != null;
  }

  logout(){
    localStorage.removeItem('user');
  }
}
