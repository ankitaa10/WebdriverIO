import { injectable } from "inversify";

@injectable() 
export abstract class BaseOverviewPage {

abstract  scrollDown();

   abstract  clickFinish();

  async finish(){
   await this.clickFinish().click()
  }
  async scroll(){
    await this.scrollDown()
  }
 
}