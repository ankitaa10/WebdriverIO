import container  from '../../../../container';

import "reflect-metadata";

import userData from '../../fixtures/sauce_credentials.json';
import { symbolLoginPage, symbolLoginPage1 } from '../../support/module/sauce_login/symbols';
import { BaseLoginPage } from '../../support/module/sauce_login/LoginPage';

import { BaseCartPage } from '../../support/module/sauce_home/HomePage';
import { symbolCartPage } from '../../support/module/sauce_home/symbols';
import { symbolCartPage1 } from '../../support/module/sauce_home/symbols';

import { BaseItemsPage } from '../../support/module/sauce_cart/CartPage';
import { symbolItemsPage } from '../../support/module/sauce_cart/CartAndroid.screen';
import { symbolItemsPage1 } from '../../support/module/sauce_cart/CartIOS.screen';
import { BaseCheckoutPage } from '../../support/module/sauce_checkout/CheckoutPage';
import { symbolCheckoutPage } from '../../support/module/sauce_checkout/CheckoutAndroid.screen';
import { symbolCheckoutPage1 } from '../../support/module/sauce_checkout/CheckoutIOS.screen';
import { BaseOverviewPage } from '../../support/module/sauce_overview/OverviewPage';
import { symbolOverviewPage } from '../../support/module/sauce_overview/OverviewAndroid.screen';
import { symbolOverviewPage1 } from '../../support/module/sauce_overview/OverviewIOS.screen';
//import { symbolOverviewPage } from '../../support/module/sauce_overview/symbols';
//import { symbolOverviewPage1 } from '../../support/module/sauce_overview/symbols';



 const loginPage1 =driver.isAndroid? container.get<BaseLoginPage>(symbolLoginPage) : container.get<BaseLoginPage>(symbolLoginPage1);
const cartPage1 =driver.isAndroid? container.get<BaseCartPage>(symbolCartPage) : container.get<BaseCartPage>(symbolCartPage1);
const itemPage1 = driver.isAndroid? container.get<BaseItemsPage>(symbolItemsPage) : container.get<BaseItemsPage>(symbolItemsPage1);
const checkoutPage1 = driver.isAndroid? container.get<BaseCheckoutPage>(symbolCheckoutPage) : container.get<BaseCheckoutPage>(symbolCheckoutPage1);
const overviewPage1 = driver.isAndroid? container.get<BaseOverviewPage>(symbolOverviewPage) : container.get<BaseOverviewPage>(symbolOverviewPage1);
describe('Swag Labs', () => {
   

  it('mobile testing', async () => {
      await loginPage1.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
     await loginPage1.checkMessage();
    await cartPage1.addToCartBtn();
   await cartPage1.cartSymbol();
   await itemPage1.removeBtn();
   await itemPage1.checkOutBtn();
   await checkoutPage1.checkOut(userData.validCredentials.firstName, userData.validCredentials.lastName, userData.validCredentials.postalCode);
   await checkoutPage1.continuebtn();
  await overviewPage1.scroll();
  await overviewPage1.finish();
});


});