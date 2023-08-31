import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameTagService {
  apiurl='http://localhost:8080'
  constructor(private http: HttpClient) { }

  getNameTag():Observable<any> {
    const url = `${this.apiurl}/getAllUsers`
    return this.http.get(url);
  }

  addName(name: string): Observable<any> {
    const url = `${this.apiurl}/saveUser?name=${name}`
    return this.http.post<any>(url, '');
  }
}
