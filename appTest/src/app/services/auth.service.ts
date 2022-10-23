import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = 'MyFalseToken';

  constructor() { }

  getToken(): string{
    return this.token;
  }
}
