
import { injectable } from "inversify";

import "reflect-metadata";
import { BaseLoginPage } from "./BasePage";
export const symbolLoginPage1 = Symbol.for("LoginPage1")
@injectable()
export class LoginPage1 extends BaseLoginPage{
  get usernameBtn() {
      return $('~test-Username');
  }
  get passwordBtn() {
      return $('~test-Password');
  }
  get loginbtn() {
      return $('~test-LOGIN');
  }


  async checkMessage(){
      const backpackElement = await $("-ios class chain:**/XCUIElementTypeStaticText[`label == 'Sauce Labs Backpack'`]");
      const backpackText = await backpackElement.getText();
      expect(backpackText).toContain("Sauce Labs Backpack");

  }
}