const Login = require("../pages/login")
const data=require("../testdata/data")
describe("this is the test",()=>{

    it('login', async() => {

        await Login.open()
        await Login.login(data.username,data.pass)
        await expect(Login.message).toBeExisting()
        await expect(Login.message).toHaveTextContaining("Dashboard")
       

    })
})