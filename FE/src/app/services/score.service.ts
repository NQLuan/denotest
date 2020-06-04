import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ScoreService {
  baseUrl = environment.apiUrl + 'score';

  constructor(private http: HttpClient) {
  }

  getAllScores(): Observable<any> {
    return this.http.get('http://127.0.0.1:2345/score');
  }

  getScoreById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createScore(score: any) {
    return this.http.post(this.baseUrl, score);
  }

  editScore(id: any, score: any) {
    return this.http.put(`${this.baseUrl}/${id}`, score);
  }

  deleteScore(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
