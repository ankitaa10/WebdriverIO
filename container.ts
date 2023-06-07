import {Container} from "inversify";
import {BaseLoginPage, LoginPage, LoginPage1} from "./e2e/src/support/module/sauce_login/LoginPage.screen";
import { symbolLoginPage, symbolLoginPage1 } from "./e2e/src/support/module/sauce_login/symbols";


const container = new Container();
//container.bind(LoginPage).toSelf();
container.bind<BaseLoginPage>(symbolLoginPage).to(LoginPage);
container.bind<BaseLoginPage>(symbolLoginPage1).to(LoginPage1);
export default container;
