import { injectable } from "inversify";

@injectable() 
export abstract class BaseCartPage { 
    abstract get addToCartBtn();
    async addToCart() {
      
        await this.addToCartBtn.click(); 
       } 
        } 
