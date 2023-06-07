import container  from '../../../../container';
import { LoginPage, LoginPage1 } from "../../support/module/sauce_login/LoginPage.screen";
import "reflect-metadata";

import userData from '../../fixtures/sauce_credentials.json';
 



describe('Swag Labs', () => {
  const loginPage = container.get(LoginPage);
  const loginPage1 = container.get(LoginPage1);
  it('login functionality check', async () => {
      await loginPage.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
      await loginPage.checkMessage();
  });

  it('login functionality check', async () => {
    await loginPage1.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
    await loginPage1.checkMessage();
});


});