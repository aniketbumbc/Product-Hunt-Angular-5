//import { Domain } from "domain";
export class Article{
title:string;
link:string;
votes:number;
ArticleNumber:number;

constructor(title:string,link:string,votes:number,ArticleNumber:number){

    this.title=title;    
    this.link=link;
    this.votes=votes||0;
    this.ArticleNumber=ArticleNumber;
}
voteUp()
   {
     this.votes +=1;
     return false;
   }
   voteDown()
   {
     this.votes -=1;
     return false;
   }  


domain():string{
    try{
const domainAndPath:string=this.link.split('//')[1];
return domainAndPath.split('/')[0];
    }catch(err){
        return null;
    }
}
}