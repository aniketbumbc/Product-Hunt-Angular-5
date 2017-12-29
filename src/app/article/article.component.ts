import { Component, OnInit,HostBinding } from '@angular/core';
//import { HostBinding } from '@angular/core/src/metadata/directives';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class')cssClass='row';
article:Article;
votes:number;
title:string;
link:string;
ArticleNumber:number;
constructor() {
  this.article=new Article(
'Angular 5',
'https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced',
20,
6);
   }
   voteUp():boolean
   {
     this.article.voteUp();
     return false;
   }
   voteDown():boolean
   {
     this.article.voteDown();
     return false;
   }  

  ngOnInit() {
  }

}
