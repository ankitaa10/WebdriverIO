const loginPage = require("../../support/module/sauce_login/LoginPage.screen")
import userData from "../../fixtures/sauce_credentials.json"
describe('Login Page Test', () => {
    it('Find element by accessibility id', async () => {
      // find element by accessibility id
      
      // await loginPage.usernameBtn.addValue(userData.validCredentials.userName);
       await loginPage.performLogin(userData.validCredentials.userName,userData.validCredentials.password)
      // await loginPage.passwordBtn.addValue(userData.validCredentials.password);
      await loginPage.checkMessage()
       //await loginPage.loginbtn.click();
    })
  
    
  });