import { Component, OnInit, ViewChild } from '@angular/core';
// import { News } from '../shared/news'
// import { Socials } from '../shared/news'
// import { Comment } from '../shared/news'

@Component({
  selector: 'app-admin-news-view',
  templateUrl: './admin-news-view.component.html',
  styleUrls: ['./admin-news-view.component.scss']
})

export class AdminNewsViewComponent implements OnInit {
  @ViewChild("demoBasic") demoBasic;
  @ViewChild("demoBasic2") demoBasic2;
public newsEntryData:any;
public queryString;
public emptyNews;
public editMode:boolean;
public searchableNewsOptions;
  // id:string;
  // title?: string;
  // dateCreated?: Date;
  // content?: string;
  // mainImage?: string;
  // subImages?: Array<string>;
  // categories?: Array<string>;
  // isHot?: boolean;
  // createdBy: string;
  // socials?: Socials;
  // relatedNews:Array<string>;

  constructor() {
    this.emptyNews= {
      title:"",
      categories:[],
      tags:"",
      mainImage:"",
      subImages:"",
      content:"",
      isHot:true
    }
    // this.searchableNewsOptions = ['title','category'];
   }

  ngOnInit() {
  }


createNewsModal(){
  this.newsEntryData = this.emptyNews;
  this.editMode=false;
  this.demoBasic.show()
  
  
}
newsDetailsModal(object){
  this.newsEntryData = object;
  this.demoBasic2.show()
  
  
}
editNewsModal(object){
  
  console.log(this.newsEntryData, object )
  this.newsEntryData = object;
  this.editMode=true;
  this.demoBasic.show()
  this.demoBasic2.hide()
}
formAction(object){
  if(this.editMode){
    console.log("editing news")
    return  this.edit(object);
  }else if(!this.editMode){
    console.log("creating news")
    return this.add(object);
  }
}
edit(object){
console.log(object);
if ( confirm('Are you sure you want to edit this item as these changes will show on the main site?') ){
  this.newsDetailsModal(object)
  let categoryArray = object.category.split(" ");
  object.categories = categoryArray;
  delete object.category;

  this.demoBasic.hide()
}
}
add(object){
  console.log(object);
  if ( confirm('Are you sure you want to post this item on the main site?') ){
    this.demoBasic.hide()
    console.log(object.category.split(" "));
    console.log("old obj", object)
    object.categories.push(object.category);
    delete object.category;
    console.log("new obj", object)
    this.newsArray.unshift(object);
    this.emptyNews={
      title:"",
      categories:[],
      tags:"",
      mainImage:"",
      subImages:"",
      content:"",
      isHot:true
    };
    this.newsEntryData = this.emptyNews;
    console.log(this.newsEntryData, this.emptyNews)
    return
   }
}
delete(id){
  console.log(id);
  if ( confirm('Are you sure you want to delete this item?') ){
   return this.newsArray.splice(id, 1);
  }
}

  newsArray=[
    // new News()
    {id:'1',
     title:'Tuface became a bad guy',
     dateCreated:new Date(12-2-2017),
     content:'the guy tuface just came in one morning and decided that he ball he was playing was a very dirty one',
     mainImage:'',
     subImages:['',''],
     categories:['celeb','music'],
     isHot:true,
     tags:"",
     createdBy:'lazypoet',
     socials:{likes:'', shares:'', comments:[] },
     relatedNews:[]
    },
    {id:'2',
    title:'Bobrisky Again',
    dateCreated:'11/2/2017',
    content:'bobrisky has started again oo.. he came to the mall yesterday and decided to sleep on the floor shouting bad guy',
    mainImage:'',
    subImages:['',''],
    categories:['celeb','hot'],
    isHot:true,
    tags:"",
    createdBy:'simon',
    socials:[],
    relatedNews:[]
   },
   {id:'3',
   title:'Musa yaradua becomes ecowas chairman',
   dateCreated:'10/2/2017',
   content:'the president of the federal republic of nigeria has decided to take on the role of ecowas chairman following his appointment',
   mainImage:'',
   subImages:['',''],
   categories:['politics','govt'],
   isHot:false,
   tags:"",
   createdBy:'lazypoet',
   socials:[],
   relatedNews:['']
  },
  {id:'4',
  title:'Afrobeat launches a new site',
  dateCreated:'12/2/2017',
  content:'the renowned afrobeat entertainment has finally launched a site give you guys the best experence you can find on mobile and desktop',
  mainImage:'',
  subImages:['',''],
  categories:['life','hot'],
  isHot:true,
  tags:"",
  createdBy:'simon',
  socials:[],
  relatedNews:['']
  }
  ] 
}
