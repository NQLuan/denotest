import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClassNameService {
  baseUrl = environment.apiUrl + 'class';

  constructor(private http: HttpClient) {
  }

  getAllClasses(): Observable<any> {
    return this.http.get('http://127.0.0.1:2345/api/class');
  }

  getClassById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createClass(cl: any) {
    return this.http.post(this.baseUrl, cl);
  }

  editClass(id: any, cl: any) {
    return this.http.put(`${this.baseUrl}/${id}`, cl);
  }

  deleteClass(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
