import {Container} from "inversify";
import {LoginPage} from "./e2e/src/support/module/sauce_login/LoginPage.screen";



const container = new Container();
container.bind(LoginPage).toSelf();

export default container;
