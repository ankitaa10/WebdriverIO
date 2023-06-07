import container  from '../../../../container';
import { BaseLoginPage } from "../../support/module/sauce_login/LoginPage.screen";
import { symbolLoginPage, symbolLoginPage1 } from "../../support/module/sauce_login/symbols"
import "reflect-metadata";

import userData from '../../fixtures/sauce_credentials.json';

const loginPage = container.get<BaseLoginPage>(symbolLoginPage);
const loginPage1 = container.get<BaseLoginPage>(symbolLoginPage1);



describe('Swag Labs', () => {
  // const loginPage = container.get(LoginPage);
  // const loginPage1 = container.get(LoginPage1);

  it('login functionality check for loginPage', async () => {
      await loginPage.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
      await loginPage.checkMessage();
  });
  
  it('login functionality check for loginPage1', async () => {
    await loginPage1.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
    await loginPage1.checkMessage();
});


});