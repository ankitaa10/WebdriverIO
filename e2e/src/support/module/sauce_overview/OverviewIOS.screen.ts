import { injectable } from "inversify";


import "reflect-metadata";
import { BaseOverviewPage } from "./OverviewPage";
export const symbolOverviewPage1 = Symbol.for("OverviewPage1");
@injectable()
export class OverviewPage1 extends BaseOverviewPage{
 scrollDown() {
        return $('android = new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }
    clickFinish(){
         return $('~test-FINISH').click();
     }
    
}