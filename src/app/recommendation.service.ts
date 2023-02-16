import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private http:HttpClient) { }

    getAllRecommendSong(): Observable<any> {
    return this.http.get<any>("http://localhost:8095/api/v1/recommend");
}
}
