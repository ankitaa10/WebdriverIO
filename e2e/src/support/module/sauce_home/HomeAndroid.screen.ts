import { injectable } from "inversify";


import "reflect-metadata";
import { BaseCartPage } from "./HomePage";

//export const symbolCartPage = Symbol.for("CartPage");
//export const symbolCartPage = Symbol.for("CartPage");
@injectable()
export class CartPage extends BaseCartPage{
    // get addToCartBtn() {
    //     return $$('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[2]/android.widget.TextView');
       
    // }

    // async addToCart() {
    //     // await this.addToCartBtn().click();
    //      await this.addToCartBtn[1].click();
    //      await this.addToCartBtn[2].click(); 
         
    //     } 
    async addToCartBtn(){
        const addElement = await $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]/android.widget.TextView');
         await addElement.click();
         
     }
    // async cartSymbol(){
    //     $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')
    // }
    async cartSymbol(){
        // return $('//XCUIElementTypeOther[@name="test-Cart"]/XCUIElementTypeOther')
        (await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')).click();
     }
    
}