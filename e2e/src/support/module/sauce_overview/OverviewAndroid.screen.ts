import { injectable } from "inversify";


import "reflect-metadata";
import { BaseOverviewPage } from "./OverviewPage";

export const symbolOverviewPage = Symbol.for("OverviewPage");
@injectable()

export class OverviewPage extends BaseOverviewPage{
   scrollDown() {
    
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("FINISH")');
    }

    clickFinish(){
         return $('~test-FINISH');
     }
   
}

