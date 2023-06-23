import container  from '../../../../container';
//import { symbolLoginPage } from "../../support/module/sauce_login/symbols"
import "reflect-metadata";
import { LoginPage} from "../../support/module/sauce_login/Login.screen"
import userData from '../../fixtures/sauce_credentials.json';
import { symbolLoginPage, symbolLoginPage1 } from '../../support/module/sauce_login/symbols';
import { BaseLoginPage } from '../../support/module/sauce_login/BasePage';
import { BaseCartPage } from '../../support/module/sauce_home/BasePage';
import { symbolCartPage } from '../../support/module/sauce_home/Cart.screen';
import { symbolCartPage1 } from '../../support/module/sauce_home/Cart1.screen';


// const loginPage = container.get<BaseLoginPage>(symbolLoginPage);
// const cartPage = container.get<BaseCartPage>(symbolCartPage);
// const loginPage1 = container.get<BaseLoginPage>(symbolLoginPage1);
// const cartPage1 = container.get<BaseCartPage>(symbolCartPage1);
 const loginPage1 =driver.isAndroid? container.get<BaseLoginPage>(symbolLoginPage) : container.get<BaseLoginPage>(symbolLoginPage1);
 const cartPage1 =driver.isAndroid? container.get<BaseCartPage>(symbolCartPage) : container.get<BaseCartPage>(symbolCartPage1);
describe('Swag Labs', () => {
   //const loginPage = container.get(LoginPage);
  // const loginPage1 = container.get(LoginPage1);

  it('mobile testing', async () => {
      await loginPage1.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
     await loginPage1.checkMessage();
   await cartPage1.addToCart();
});


});