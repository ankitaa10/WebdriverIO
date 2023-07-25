import { injectable } from "inversify";
import { BaseCheckoutPage } from "./CheckoutPage";
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
            const continueElement = await $('//android.view.ViewGroup[@content-desc="test-CONTINUE"]/android.widget.TextView');
            continueElement.click();
        }
       
    }