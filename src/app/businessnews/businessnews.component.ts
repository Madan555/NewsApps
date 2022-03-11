import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
  business:any = [];
  constructor(private businessapi:NewsapiService) { }

  ngOnInit(): void {
    this.businessapi.businessNews().subscribe((result:any)=>{
      this.business = result.articles;
    })
  }

}
