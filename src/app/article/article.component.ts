import { Component, OnInit,HostBinding,Input } from '@angular/core';
//import { HostBinding } from '@angular/core/src/metadata/directives';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class')cssClass='row';
@Input()article:Article;
//article:Article;
votes:number;
title:string;
link:string;
ArticleNumber:number;
constructor() {}
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
