export class News {
    id:string;
    title?: string;
    dateCreated?: Date;
    content?: string;
    mainImage?: string;
    subImages?: Array<string>;
    categories?: Array<string>;
    isHot?: boolean;
    createdBy: string;
    socials?: Socials;
    relatedNews:Array<News>;
  }
  export interface Socials{
      likes :number;
      shares :number;
      comments:Array<Comment>;
  }
  export interface Comment{
      id:string;
      parent:string;
      content:string;
      postedOn:Date;
      postedBy:Comment;
  }