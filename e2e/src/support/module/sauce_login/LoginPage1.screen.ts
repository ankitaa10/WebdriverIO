// import { injectable } from "inversify";
// import { BaseLoginPage } from "./BasePage";
// import "reflect-metadata";
// export const symbolLoginPage1 = Symbol.for("LoginPage1")
// @injectable()
// export class LoginPage1 extends BaseLoginPage{
//     get usernameBtn() {
//         return $('~test-Username');
//     }
//     get passwordBtn() {
//         return $('~test-Password');
//     }
//     get loginbtn() {
//         return $('~test-LOGIN');
//     }
//     get checkMessage() {
//         return $("-ios class chain:**/XCUIElementTypeStaticText[`label == 'Sauce Labs Backpack'`]");
//     }

//     async performLogin(username, password){
//         await this.usernameBtn.setValue(username)
//         await this.passwordBtn.setValue(password)
//         await this.loginbtn.click()
   
// }
// async getcheckMessage(){
//           return this.checkMessage.getText();
// }
   
// }
