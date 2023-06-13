import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

    constructor(private httpClient: HttpClient) {}

    generateVideo(data: any) {
      let auth_token = localStorage.getItem('token');
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });

      const requestOptions = { headers: headers };
      
      return this.httpClient.post('/api/' + 'execute-cli-nexrender', data , requestOptions);
    }
}
