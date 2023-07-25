import { injectable } from "inversify";
import { BaseItemsPage } from "./CartPage";


import "reflect-metadata";
export const symbolItemsPage = Symbol.for("ItemsPage");
@injectable()
export class ItemsPage extends BaseItemsPage{
    async removeBtn(){
        const removeElement = await $('//android.view.ViewGroup[@content-desc="test-REMOVE"]/android.widget.TextView');
        await removeElement.click();
    }
    async checkOutBtn(){
        const checkOutElement = await $('//android.view.ViewGroup[@content-desc="test-CHECKOUT"]/android.widget.TextView');
        await checkOutElement.click();
    }
}