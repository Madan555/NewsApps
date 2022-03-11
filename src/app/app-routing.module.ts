import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
    {path:'',component:TopheadlineComponent},
    {path:'technews',component:TechnewsComponent},
    {path:'businessnews',component:BusinessnewsComponent},
    {path:'sciencenews',component:SciencenewsComponent},
    {path:'home',component:TopheadlineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
