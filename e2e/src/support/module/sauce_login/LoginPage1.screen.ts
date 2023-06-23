// import { injectable } from "inversify";

// import "reflect-metadata";

// //export const symbolLoginPage1 = Symbol.for("LoginPage1")
// @injectable() 
// export abstract class BaseLoginPage { 
//     abstract get usernameBtn();
//     abstract get passwordBtn();
//     abstract get loginBtn();
//     abstract get addToCartBtn();
//     abstract checkMessage();
    
//     async performLogin(username: string, password: string) {
//          await this.usernameBtn.setValue(username); 
//          await this.passwordBtn.setValue(password); 
//          await this.loginBtn.click(); 
//          await this.addToCartBtn.click();
//         } }
//         export const symbolLoginPage = Symbol.for("LoginPage");



//  @injectable()
//  export class LoginPage extends BaseLoginPage {
  
//    get usernameBtn() {
//      if (driver.isAndroid) {
//        return $('//android.widget.EditText[@content-desc="test-Username"]');
//      } else {
//        return $('//XCUIElementTypeTextField[@name="test-Username"]');
//      }
//    }
 
//    get passwordBtn() {
//      if (driver.isAndroid) {
//        return $('//android.widget.EditText[@content-desc="test-Password"]');
//      } else {
//        return $('//XCUIElementTypeSecureTextField[@name="test-Password"]');
//      }
//    }
 
//    get loginBtn() {
//      if (driver.isAndroid) {
//        return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
//      } else {
//        return $('//XCUIElementTypeOther[@name="test-LOGIN"]');
//      }
//    }
 
//    async checkMessage() {
//      if (driver.isAndroid) {
//        const productText = await $('//android.widget.TextView[@text ="PRODUCTS"]');
//        await expect(productText).toHaveText("PRODUCTS");
//      } else {
//        const backpackElement = await $(
//          "-ios class chain:**/XCUIElementTypeStaticText[`label == 'Sauce Labs Backpack'`]"
//        );
//        const backpackText = await backpackElement.getText();
//        expect(backpackText).toContain("Sauce Labs Backpack");
//      }
//    }
//    get addToCartBtn() {
//     if (driver.isAndroid) {
//       return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]/android.widget.TextView');
//     } else {
//       return $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]');
//     }
//  }
// }