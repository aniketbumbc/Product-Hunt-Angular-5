import { Component } from '@angular/core';
import{Article}from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  articles:Article[];
  addArticle(title: HTMLInputElement, link: HTMLInputElement, ArticleNumber:HTMLInputElement): boolean 
  {
      console.log(`Adding Article title: ${title.value} and link:${link.value} and ArticleNumber:${ArticleNumber.value}`);
      this.articles.push(new Article(title.value,link.value,0,0));
      title.value='';
      link.value='';
      return false;
  }
  constructor(){

this.articles=[
new Article('photography','http://ngm.nationalgeographic.com/2013/10/power-of-photography/draper-text',20,5),
new Article('Cricket','http://www.cricbuzz.com/',42,5),
new Article('Angular','https://blog.thoughtram.io/categories/angular-2/',35,5),
new Article('Chemistry','http://www.chem.ed.ac.uk/news-events/news/chemistry-world-article',66,5),
];
  }
  sortArticle():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }
}




