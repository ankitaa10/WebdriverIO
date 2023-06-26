import { injectable } from "inversify";
import { BaseCheckoutPage } from "./BasePage";
export const symbolCheckoutPage = Symbol.for("CheckoutPage");
@injectable()
      export class CheckoutPage extends BaseCheckoutPage{
        get fName() {
            return $('~test-First Name');
        }
        get lName() {
            return $('~test-Last Name');
        }
        get postalcode() {
            return $('~test-Zip/Postal Code');
        }
    
        async continuebtn(){
            const continueElement = await $('~test-CONTINUE');
            continueElement.click();
        }
       
    }