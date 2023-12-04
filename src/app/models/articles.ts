
// consideriamolo alla stregue di un'interface 

export type Article = {
    id: number;
    userId: number;
    title: string;
    published: boolean;
    text: string;
}

export class NewArticleDto{
    constructor(
        public userId: number,
        public title: string ="", 
        public published: boolean = false,
        public text: string = "",
    ){
        
    }
}