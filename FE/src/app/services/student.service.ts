import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {
  baseUrl = environment.apiUrl + 'student';

  constructor(private http: HttpClient) {
  }

  getAllStudents(): Observable<any> {
    return this.http.get('http://127.0.0.1:2345/api/student');
  }

  getStudentById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(student: any) {
    return this.http.post(this.baseUrl, student);
  }

  editStudent(id: any, student: any) {
    return this.http.put(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
