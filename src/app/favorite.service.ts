import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FavoriteTable } from './displaysongs/model/FavoriteTable';
import { RecommendationTable } from './displaysongs/model/RecommendationTable';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }
value:any;
  getFavoritesByUserId(id:any): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/v1/favoritesByUser/"+id);
}
deleteFavoritesById(songId:any): Observable<FavoriteTable> {
  console.log(songId)
  return this.http.delete<FavoriteTable>("http://localhost:8080/api/v1/favorite/"+songId);
}

recommendSongById(recommend : RecommendationTable) : Observable<any>{
  return this.http.post<RecommendationTable>("http://localhost:8095/api/v1/recommend",recommend);
}

checkRecommend(recommend: RecommendationTable ): Observable<RecommendationTable>{
  console.log(recommend.singerName)
  console.log(recommend.songName)

   return this.http.get<RecommendationTable>("http://localhost:8095/api/v1/recommend1/"+recommend.songName);
}
}
