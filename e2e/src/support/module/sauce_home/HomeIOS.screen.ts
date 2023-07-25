import { injectable } from "inversify";


import "reflect-metadata";
import { BaseCartPage } from "./HomePage";

// export const symbolHomePage1 = Symbol.for("HomePage1");

@injectable()
export class CartPage1 extends BaseCartPage{
    // get addToCartBtn() {
    //     return $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]');
    // }
    async addToCartBtn(){
        const addElement = await $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]');
         await addElement.click();
    }
    async cartSymbol(){
       // return $('//XCUIElementTypeOther[@name="test-Cart"]/XCUIElementTypeOther')
       (await $('//XCUIElementTypeOther[@name="test-Cart"]/XCUIElementTypeOther')).click();
    }
}