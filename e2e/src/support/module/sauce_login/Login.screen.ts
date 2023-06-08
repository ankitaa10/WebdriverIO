


// import { injectable } from "inversify";

// import "reflect-metadata";


// export abstract class BaseLoginPage { 
//     abstract get usernameBtn();
//     abstract get passwordBtn();
//     abstract get loginbtn();
//     abstract get checkMessage();
    
//     abstract performLogin(username: string, password: string);
//     abstract getcheckMessage();


// } 


// @injectable()
//       export class LoginPage extends BaseLoginPage{
//         get usernameBtn() {
//             return $('//android.widget.EditText[@content-desc="test-Username"]');
//         }
//         get passwordBtn() {
//             return $('//android.widget.EditText[@content-desc="test-Password"]');
//         }
//         get loginbtn() {
//             return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
//         }
//         get checkMessage() {
//             return $('//android.widget.TextView[@text ="PRODUCTS"]');
//         }
    
//         async performLogin(username:string, password:string){
//             await this.usernameBtn.setValue(username)
//             await this.passwordBtn.setValue(password)
//             await this.loginbtn.click()
       
//     }
//     async getcheckMessage(){
//               return this.checkMessage.getText();
//     }
// }

// @injectable()
// export class LoginPage1 extends BaseLoginPage{
//     get usernameBtn() {
//         return $('//XCUIElementTypeTextField[@name="test-Username"]');
//     }
//     get passwordBtn() {
//         return $('//XCUIElementTypeSecureTextField[@name="test-Password"]');
//     }
//     get loginbtn() {
//         return $('//XCUIElementTypeOther[@name="test-LOGIN"]');
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
  
// export const symbolLoginPage1 = Symbol.for("LoginPage1")
// export const symbolLoginPage = Symbol.for("LoginPage")    