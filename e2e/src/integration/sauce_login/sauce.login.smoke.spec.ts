import container  from '../../../../container';
import { LoginPage } from "../../support/module/sauce_login/LoginPage.screen";
import "reflect-metadata";

import userData from '../../fixtures/sauce_credentials.json';
 



describe('Swag Labs', () => {
  const loginPage = container.get(LoginPage);
  it('login functionality check', async () => {
      await loginPage.performLogin(userData.validCredentials.userName, userData.validCredentials.password);
      await loginPage.checkMessage();
  });

});