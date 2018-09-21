import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public posts: News[]=[];
  public title:string ;

  constructor(private news:NewsServiceService) { 
    this.posts=news.GetAllNews();
    console.log(this.posts);
    this.title=this.posts[0].title;
  }

  ngOnInit() {
  }

}
