import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  science:any = [];
  constructor(private scienceapi:NewsapiService) { }

  ngOnInit(): void {
    this.scienceapi.scienceNews().subscribe((result:any)=>{
      this.science = result.articles;
    })
  }
}
