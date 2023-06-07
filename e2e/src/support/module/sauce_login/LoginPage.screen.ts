


import { injectable } from "inversify";

import "reflect-metadata";




@injectable()
      export class LoginPage{
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
            
            const productText = await $('//android.widget.TextView[@text ="PRODUCTS"]');
            await expect(productText).toHaveText("PRODUCTS");
            
        }
       
    }
    
