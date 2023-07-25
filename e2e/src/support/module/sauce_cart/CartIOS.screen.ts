import { injectable } from "inversify";
import { BaseItemsPage } from "./CartPage";

import "reflect-metadata";
export const symbolItemsPage1 = Symbol.for("ItemsPage1");
@injectable()
export class ItemsPage1 extends BaseItemsPage{
  
    async removeBtn(){
        const removeElement = await $('(//XCUIElementTypeOther[@name="test-REMOVE"])[1]');
        const remove = await removeElement.click();
    }
    async checkOutBtn(){
        const checkOutElement = await $('~test-CHECKOUT');
     
        checkOutElement.click();
    }
}