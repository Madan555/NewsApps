import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private HomeApi:NewsapiService) { }
  homeNewsLine:any = [];

  ngOnInit(): void {
    this.HomeApi.HomeNews().subscribe((result:any)=>{
      console.log(result);
      this.homeNewsLine = result.articles;
    })
  }

}
