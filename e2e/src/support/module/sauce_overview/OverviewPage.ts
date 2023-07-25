import { injectable } from "inversify";

@injectable() 
export abstract class BaseOverviewPage {
//abstract get finishBtn();
abstract  scrollDown();

   abstract  clickFinish();
  // abstract clickFinishButton();
  async finish(){
   await this.clickFinish().click()
  }
  async scroll(){
    await this.scrollDown()
  }
 
}