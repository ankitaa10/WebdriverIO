import { injectable } from "inversify";


import "reflect-metadata";
import { BaseCartPage } from "./BasePage";

export const symbolCartPage1 = Symbol.for("CartPage1");
@injectable()
export class CartPage1 extends BaseCartPage{
    get addToCartBtn() {
        return $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]');
    }
}