import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  technews:any=[];
  constructor(private techapi:NewsapiService) { }

  ngOnInit(): void {
     this.techapi.techNews().subscribe((result:any)=>{
       this.technews = result.articles;
    })
  }

}
