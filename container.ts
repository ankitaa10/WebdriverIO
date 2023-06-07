import {Container} from "inversify";
import {BaseLoginPage, LoginPage, LoginPage1} from "./e2e/src/support/module/sauce_login/LoginPage.screen";



const container = new Container();
//container.bind(LoginPage).toSelf();
container.bind<BaseLoginPage>('LoginPage').to(LoginPage);
container.bind<BaseLoginPage>('LoginPage1').to(LoginPage1);
export default container;
