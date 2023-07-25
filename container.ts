import {Container} from "inversify";
import { BaseCartPage } from "./e2e/src/support/module/sauce_home/HomePage";
// import { CartPage, symbolCartPage } from "./e2e/src/support/module/sauce_cart/Cart.screen";
// import { CartPage1 } from "./e2e/src/support/module/sauce_cart/Cart1.screen";
import { symbolCartPage1 } from "./e2e/src/support/module/sauce_home/symbols";
// import { BaseHomePage } from "./e2e/src/support/module/sauce_home/BasePage";
// import { HomePage, symbolHomePage } from "./e2e/src/support/module/sauce_home/Home.screen";
// import { HomePage1, symbolHomePage1 } from "./e2e/src/support/module/sauce_home/Home1.screen";
// import { BaseHomePage, BaseHomePage } from "./e2e/src/support/module/sauce_home/BasePage";
// import { CartPage, HomePage, symbolCartPage, symbolHomePage } from "./e2e/src/support/module/sauce_home/Home.screen";
// import { CartPage1, HomePage1, symbolCartPage1, symbolHomePage1 } from "./e2e/src/support/module/sauce_home/Home1.screen";
import { BaseLoginPage } from "./e2e/src/support/module/sauce_login/LoginPage";
import {LoginPage} from "./e2e/src/support/module/sauce_login/LoginAndroid.screen";
import { LoginPage1 } from "./e2e/src/support/module/sauce_login/LoginIOS.screen";
import { symbolLoginPage , symbolLoginPage1} from "./e2e/src/support/module/sauce_login/symbols";
import { symbolCartPage  } from "./e2e/src/support/module/sauce_home/symbols";
import { CartPage } from "./e2e/src/support/module/sauce_home/HomeAndroid.screen";
import { CartPage1 } from "./e2e/src/support/module/sauce_home/HomeIOS.screen";
import { BaseItemsPage } from "./e2e/src/support/module/sauce_cart/CartPage";
import { symbolItemsPage, ItemsPage } from "./e2e/src/support/module/sauce_cart/CartAndroid.screen";
import { symbolItemsPage1, ItemsPage1 } from "./e2e/src/support/module/sauce_cart/CartIOS.screen";
import { BaseCheckoutPage } from "./e2e/src/support/module/sauce_checkout/CheckoutPage";
import { symbolCheckoutPage, CheckoutPage } from "./e2e/src/support/module/sauce_checkout/CheckoutAndroid.screen";
import { symbolCheckoutPage1, CheckoutPage1 } from "./e2e/src/support/module/sauce_checkout/CheckoutIOS.screen";
import { BaseOverviewPage } from "./e2e/src/support/module/sauce_overview/OverviewPage";
//import { symbolOverviewPage, OverviewPage } from "./e2e/src/support/module/sauce_overview/Overview.screen";
import { OverviewPage1, symbolOverviewPage1 } from "./e2e/src/support/module/sauce_overview/OverviewIOS.screen";
//import { symbolOverviewPage, symbolOverviewPage1 } from "./e2e/src/support/module/sauce_overview/symbols";
import { OverviewPage, symbolOverviewPage } from "./e2e/src/support/module/sauce_overview/OverviewAndroid.screen";
// import { CartPage } from "./e2e/src/support/module/sauce_home/Home.screen";
// import { CartPage1 } from "./e2e/src/support/module/sauce_home/Home1.screen";




const container = new Container();
// if (driver.isAndroid){
//     //container.bind(LoginPage).toSelf();
//     container.bind<BaseLoginPage>(symbolLoginPage).to(LoginPage);
//     } else{
//     container.bind<BaseLoginPage>(symbolLoginPage1).to(LoginPage1);
//     }
//container.bind(LoginPage).toSelf();
container.bind<BaseLoginPage>(driver.isAndroid ? symbolLoginPage: symbolLoginPage1).to(driver.isAndroid ? LoginPage: LoginPage1);
// container.bind<BaseCartPage>(driver.isAndroid ? symbolCartPage: symbolCartPage1).to(driver.isAndroid ? CartPage: CartPage1);
//driver.isAndroid ? container.bind<BaseLoginPage>(symbolLoginPage).to(LoginPage):container.bind<BaseLoginPage>(symbolLoginPage1).to(LoginPage1);
driver.isAndroid ? container.bind<BaseCartPage>(symbolCartPage).to(CartPage):container.bind<BaseCartPage>(symbolCartPage1).to(CartPage1);
driver.isAndroid ? container.bind<BaseItemsPage>(symbolItemsPage).to(ItemsPage):container.bind<BaseItemsPage>(symbolItemsPage1).to(ItemsPage1);
driver.isAndroid ? container.bind<BaseCheckoutPage>(symbolCheckoutPage).to(CheckoutPage):container.bind<BaseCheckoutPage>(symbolCheckoutPage1).to(CheckoutPage1);
driver.isAndroid ? container.bind<BaseOverviewPage>(symbolOverviewPage).to(OverviewPage):container.bind<BaseOverviewPage>(symbolOverviewPage1).to(OverviewPage1);
// driver.isAndroid ? container.bind<BaseHomePage>(symbolHomePage).to(HomePage):container.bind<BaseHomePage>(symbolHomePage1).to(HomePage1);
// const loginPage1 =driver.isAndroid? container.get<BaseLoginPage>(symbolLoginPage) : container.get<BaseLoginPage>(symbolLoginPage1);
// const cartPage1 =driver.isAndroid? container.get<BaseCartPage>(symbolCartPage) : container.get<BaseCartPage>(symbolCartPage1);
//container.bind<BaseLoginPage>(driver.isIOS ? symbolLoginPage1: symbolLoginPage).to(driver.isIOS ? LoginPage1: LoginPage);
// container.bind<BaseCartPage>(driver.isIOS ? symbolCartPage1: symbolCartPage).to(driver.isIOS ? CartPage1: CartPage);
export default container;