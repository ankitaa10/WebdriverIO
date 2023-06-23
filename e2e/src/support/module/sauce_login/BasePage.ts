import { injectable } from "inversify";

@injectable() 
export abstract class BaseLoginPage { 
    abstract get usernameBtn();
    abstract get passwordBtn();
    abstract get loginbtn();

    abstract checkMessage();
    
    async performLogin(username: string, password: string) {
         await this.usernameBtn.setValue(username); 
         await this.passwordBtn.setValue(password); 
         await this.loginbtn.click(); 
        } }
