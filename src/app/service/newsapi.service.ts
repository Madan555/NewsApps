import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  constructor(private http:HttpClient) {}
  NewsHomeApi = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e86e2fbfe47147d2a9981490d4bf44ca';
  NewsTechApi = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e86e2fbfe47147d2a9981490d4bf44ca';
  NewsScienceApi = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=e86e2fbfe47147d2a9981490d4bf44ca';
  NewsBusinessApi = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e86e2fbfe47147d2a9981490d4bf44ca';
  HomeNews():Observable<any>{
return this.http.get(this.NewsHomeApi);
  }
  techNews():Observable<any>{
    return this.http.get(this.NewsTechApi);
      }
      scienceNews():Observable<any>{
        return this.http.get(this.NewsScienceApi);
          }
          businessNews():Observable<any>{
            return this.http.get(this.NewsBusinessApi);
              }
}
