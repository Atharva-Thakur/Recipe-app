import { Injectable } from '@angular/core';

const User_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void{
    window.sessionStorage.clear();
  }

  public saveUser(user:any):void{
    window.sessionStorage.removeItem(User_KEY);
    console.log(user);
    window.sessionStorage.setItem(User_KEY, JSON.stringify(user));
  }

  public getUser(): any{
    const user = window.sessionStorage.getItem(User_KEY);
    if(user){
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): boolean{
    const user = window.sessionStorage.getItem(User_KEY);
    if(user){
      return true;
    }
    return false;
  }
}
