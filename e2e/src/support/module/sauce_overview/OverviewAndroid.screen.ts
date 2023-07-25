import { injectable } from "inversify";


import "reflect-metadata";
import { BaseOverviewPage } from "./OverviewPage";
//export const symbolOverviewPage = Symbol.for("OverviewPage");
export const symbolOverviewPage = Symbol.for("OverviewPage");
@injectable()

export class OverviewPage extends BaseOverviewPage{
   scrollDown() {
        //return $('android = new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("FINISH")');
    }
//  scrollDown() {
//     const scrollableSelector = 'android = new UiScrollable(new UiSelector().scrollable(true))';
//     const scrollToEndSelector = '${scrollableSelector}.scrollToEnd(10)';
//     $(scrollToEndSelector);
// }
    clickFinish(){
         return $('~test-FINISH');
     }
    // clickFinishButton(){
    //     //this.finishBtn.scrollIntoView();
    //     this.clickfinish.click();
    // }
}

