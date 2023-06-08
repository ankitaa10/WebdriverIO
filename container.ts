import {Container} from "inversify";
import {BaseLoginPage, LoginPage, LoginPage1} from "./e2e/src/support/module/sauce_login/LoginPage2.screen";
import { symbolLoginPage, symbolLoginPage1 } from "./e2e/src/support/module/sauce_login/symbols";




const container = new Container();
if (driver.isAndroid){
//container.bind(LoginPage).toSelf();
container.bind<BaseLoginPage>(symbolLoginPage).to(LoginPage);
} else{
container.bind<BaseLoginPage>(symbolLoginPage1).to(LoginPage1);
}
export default container;
