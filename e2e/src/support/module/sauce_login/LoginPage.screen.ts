class LoginPage{
    get usernameBtn() {
        return $('~test-Username');
    }
    get passwordBtn() {
        return $('~test-Password');
    }
    get loginbtn() {
        return $('~test-LOGIN');
    }

   async performLogin(username, password){
        await this.usernameBtn.setValue(username)
        await this.passwordBtn.setValue(password)
        await this.loginbtn.click()
    }
    async checkMessage(){
        await expect($('//android.widget.TextView[@text ="PRODUCTS"]')).toHaveText("PRODUCTS")
    }
   
}

module.exports = new LoginPage();