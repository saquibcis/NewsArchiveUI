import { News } from './interfaces/news';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  public posts: News[]=[];
 
  constructor(private http: Http) { }

  public GetAllNews(): News[] {
    this.http.get('http://localhost:8585/news/getAllNews')
    .subscribe(response =>{
      this.posts.push(response.json());
    });
    
    return this.posts;
  }
}
