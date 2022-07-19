export interface News {
    title: string;
    description: string;
    titleImageUrl: string;
    publishedDate: string;
  }
  
export interface PublicNews extends News {
    id: number;
    url: string;
}

export interface ReadNews extends PublicNews {
    text: string;
}