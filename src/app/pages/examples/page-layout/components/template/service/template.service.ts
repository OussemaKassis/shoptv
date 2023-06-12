import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

    constructor(private httpClient: HttpClient) {}

    generateVideo(data: any) {
      let auth_token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY4NjY0MjUxMH0.SuFtoOuTcCIUlfkZJNyhYKyhO7EBPVyX2Bi44d59ygWEkj8GazffBcf1d7pyc33mFg1P42v-sB5hsmCLwifHbQ";
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });

      const requestOptions = { headers: headers };
      
      return this.httpClient.post('/api/' + 'execute-cli-nexrender', data , requestOptions);
    }
}
