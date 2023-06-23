import { injectable } from "inversify";


import "reflect-metadata";
import { BaseCartPage } from "./BasePage";

export const symbolCartPage = Symbol.for("CartPage");
@injectable()
export class CartPage extends BaseCartPage{
    get addToCartBtn() {
        return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]/android.widget.TextView');
    }
}