import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/all`, {
      headers: {
        "Authorization": "Bearer " + this.getToken()
      }
    });
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.baseUrl}/${userId}`, {
      headers: {
      "Authorization": "Bearer " + this.getToken()
    }
  });
  }

  updateUser(userId: number, user: any) {

    
    return this.http.put<any>(`${this.baseUrl}/${userId}`, user, {
      headers: {
        "Authorization": "Bearer " + this.getToken()
      }
    });
  }

  registerUser(user: any) {
    console.log('register user frontend');
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }
  
  isAuthenticated(cred:{email:string,pass:string}) {
    return this.http.post<{token:string|null,valid:{isValid:boolean}}>(`${this.baseUrl}/login`,cred);
  }

  setToken(token:string|null){
    if(token!==null){
      localStorage.setItem(this.tokenKey,token)
    }else{
      localStorage.removeItem(this.tokenKey)
    }

  }

  getToken():string | null {
    return localStorage.getItem(this.tokenKey);
  }
}

