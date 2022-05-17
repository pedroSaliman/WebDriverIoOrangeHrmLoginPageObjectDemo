const Page=require("./page")
class Login extends Page{

get username(){
    return $("#txtUsername")
}
get password(){return $("#txtPassword")}
get btn(){return $("#btnLogin")}
get message(){return $("div[class='head'] h1")}


async login(theusername,thepassword){
    await this.username.setValue(theusername)
    await this.password.setValue(thepassword)
    await this.btn.click()
}


}
module.exports=new Login()