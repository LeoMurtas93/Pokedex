// consideriamolo alla stregua di un'interface
// modificato
export type Article = {
    id: number;
    userId: number;
    title: string;
    published: boolean;
    text: string;
    pokemonId: string;
  }
  
  export class NewArticleDto {
    constructor(
      public userId: number,
      public title: string = "",
      public published: boolean = false,
      public text: string = "",
      public pokemonId: string = ""
    ) {
  
    }
}