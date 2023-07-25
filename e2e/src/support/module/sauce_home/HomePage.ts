import { injectable } from "inversify";

@injectable() 
export abstract class BaseCartPage {
  
   abstract  addToCartBtn();
    abstract  cartSymbol();
    // async addToCart() {
    //    // await this.addToCartBtn().click();
    //     await this.addToCartBtn[1].click();
    //     await this.addToCartBtn[2].click(); 
        
    //    } 

    // async clickCartSymbol() {
    //     await this.cartSymbol.click();
    // }   

       } 
