import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from './Favorite';


@Injectable({
  providedIn: 'root'
})
export class DisplaysongsService {
  ans!:Number;
  value!:Number;
  public setValue(num:Number){
  this.ans=num;
  this.value=num;
  console.log(this.ans)
  }
  public getValue():Number{
    console.log(this.ans);
    return this.ans;
    
  }

  constructor(private _http:HttpClient) { }


  addMusicOneByOne(favorites: Favorite): Observable<Favorite>{
    console.log(favorites.singerName)
    console.log(favorites.songName)
    favorites.userId=this.value;
    console.log(favorites.userId)

     return this._http.post<Favorite>("http://localhost:8080/api/v1/favorite", favorites);
   }

  getAllMusics(): Observable<any> {
    return this._http.get<any>("http://localhost:8090/api/v1/display");


}

checkFavorite(favorites: Favorite): Observable<Favorite>{
  console.log(favorites.singerName)
  console.log(favorites.songName)
  favorites.userId=this.value;
  console.log(favorites.userId)

   return this._http.get<Favorite>("http://localhost:8080/api/v1/favorite1/"+favorites.userId+"/"+favorites.songName);
}}
