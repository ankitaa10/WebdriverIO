import { injectable } from "inversify";

@injectable() 
export abstract class BaseCheckoutPage { 
    abstract get fName();
    abstract get lName();
    abstract get postalcode();

  
    
    async checkOut(firstname: string, lastname: string, postal:string) {
         await this.fName.setValue(firstname); 
         await this.lName.setValue(lastname); 
         await this.postalcode.setValue(postal);
    }

    abstract continuebtn();
}