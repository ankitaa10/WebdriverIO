// import { injectable } from "inversify";

// import "reflect-metadata";
// export const symbolLoginPage = Symbol.for("LoginPage")
// export const symbolLoginPage1 = Symbol.for("LoginPage1")
// @injectable() 
// export abstract class BaseLoginPage { 
//     abstract get usernameBtn();
//     abstract get passwordBtn();
//     abstract get loginbtn();

//     abstract checkMessage();
    
//     async performLogin(username: string, password: string) {
//          await this.usernameBtn.setValue(username); 
//          await this.passwordBtn.setValue(password); 
//          await this.loginbtn.click(); 
//         } }


// @injectable()
//       export class LoginPage extends BaseLoginPage{
//         get usernameBtn() {
//             return $('~test-Username');
//         }
//         get passwordBtn() {
//             return $('~test-Password');
//         }
//         get loginbtn() {
//             return $('~test-LOGIN');
//         }
    
//         async checkMessage(){
            
//             const productText = await $('//android.widget.TextView[@text ="PRODUCTS"]');
//             await expect(productText).toHaveText("PRODUCTS");
            
//         }
       
//     }
  
//     @injectable()
//       export class LoginPage1 extends BaseLoginPage{
//         get usernameBtn() {
//             return $('~test-Username');
//         }
//         get passwordBtn() {
//             return $('~test-Password');
//         }
//         get loginbtn() {
//             return $('~test-LOGIN');
//         }
    
      
//         async checkMessage(){
//             const backpackElement = await $("-ios class chain:**/XCUIElementTypeStaticText[`label == 'Sauce Labs Backpack'`]");
//             const backpackText = await backpackElement.getText();
//             expect(backpackText).toContain("Sauce Labs Backpack");

//         }
       
//     }
