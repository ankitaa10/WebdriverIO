import { injectable } from "inversify";

import "reflect-metadata";




@injectable()
      export class LoginPage1{
        get usernameBtn() {
            return $('~test-Username');
        }
        get passwordBtn() {
            return $('~test-Password');
        }
        get loginbtn() {
            return $('~test-LOGIN');
        }
    
       async performLogin(username, password){
            await this.usernameBtn.setValue(username)
            await this.passwordBtn.setValue(password)
            await this.loginbtn.click()
        }
        async checkMessage(){
            const backpackElement = await $("-ios class chain:**/XCUIElementTypeStaticText[`label == 'Sauce Labs Backpack'`]");
            const backpackText = await backpackElement.getText();
            expect(backpackText).toContain("Sauce Labs Backpack");

        }
       
    }
    
