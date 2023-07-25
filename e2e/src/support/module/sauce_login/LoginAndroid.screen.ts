import { injectable } from "inversify";

import "reflect-metadata";
import { BaseLoginPage } from "./LoginPage";
export const symbolLoginPage = Symbol.for("LoginPage")




@injectable()
      export class LoginPage extends BaseLoginPage{
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
            
            const productText = await $('//android.widget.TextView[@text ="PRODUCTS"]');
            await expect(productText).toHaveText("PRODUCTS");
            
        }
       
    }
  
   
