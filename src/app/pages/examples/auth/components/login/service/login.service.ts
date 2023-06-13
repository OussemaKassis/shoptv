import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

    loginAuth(data: any) {

      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
      });

      const requestOptions = { headers: headers };
      return this.httpClient.post('/api/' + 'authenticate', data , requestOptions );
    }
}
