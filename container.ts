import {Container} from "inversify";
import { BaseCartPage } from "./e2e/src/support/module/sauce_home/BasePage";
import { CartPage, symbolCartPage } from "./e2e/src/support/module/sauce_home/Cart.screen";
import { CartPage1, symbolCartPage1 } from "./e2e/src/support/module/sauce_home/Cart1.screen";
import { BaseLoginPage } from "./e2e/src/support/module/sauce_login/BasePage";
import {LoginPage} from "./e2e/src/support/module/sauce_login/Login.screen";
import { LoginPage1 } from "./e2e/src/support/module/sauce_login/Login1.screen";
import { symbolLoginPage , symbolLoginPage1} from "./e2e/src/support/module/sauce_login/symbols";




const container = new Container();
// if (driver.isAndroid){
//     //container.bind(LoginPage).toSelf();
//     container.bind<BaseLoginPage>(symbolLoginPage).to(LoginPage);
//     } else{
//     container.bind<BaseLoginPage>(symbolLoginPage1).to(LoginPage1);
//     }
//container.bind(LoginPage).toSelf();
// container.bind<BaseLoginPage>(driver.isAndroid ? symbolLoginPage: symbolLoginPage1).to(driver.isAndroid ? LoginPage: LoginPage1);
// container.bind<BaseCartPage>(driver.isAndroid ? symbolCartPage: symbolCartPage1).to(driver.isAndroid ? CartPage: CartPage1);
driver.isAndroid ? container.bind<BaseLoginPage>(symbolLoginPage).to(LoginPage):container.bind<BaseLoginPage>(symbolLoginPage1).to(LoginPage1);
driver.isAndroid ? container.bind<BaseCartPage>(symbolCartPage).to(CartPage):container.bind<BaseCartPage>(symbolCartPage1).to(CartPage1);
// const loginPage1 =driver.isAndroid? container.get<BaseLoginPage>(symbolLoginPage) : container.get<BaseLoginPage>(symbolLoginPage1);
// const cartPage1 =driver.isAndroid? container.get<BaseCartPage>(symbolCartPage) : container.get<BaseCartPage>(symbolCartPage1);
// container.bind<BaseLoginPage>(driver.isIOS ? symbolLoginPage1: symbolLoginPage).to(driver.isIOS ? LoginPage1: LoginPage);
// container.bind<BaseCartPage>(driver.isIOS ? symbolCartPage1: symbolCartPage).to(driver.isIOS ? CartPage1: CartPage);
export default container;