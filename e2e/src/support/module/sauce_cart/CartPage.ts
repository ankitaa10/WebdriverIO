import { injectable } from "inversify";

// @injectable() 
// export abstract class BaseItemsPage { 
//     abstract get removeFromCartBtn();
//     async RemoveCart() {
      
//        // await this.addToCartBtn[1].click();
//           await this.removeFromCartBtn().click();
//        } 
//         } 
//         import { injectable } from "inversify";

@injectable() 
export abstract class BaseItemsPage {

   
   abstract removeBtn();
   abstract checkOutBtn();
    

        } 