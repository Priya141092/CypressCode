//tag#id
//tag.class
//tag[attribute=value]
//tag.class[attribute=value]

//const cypress = require("cypress")



describe('CSSLocators',()=>

{
    it("CSSlocators",()=>
    {
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   cy.get("[name ='username']").click().type("Admin")
   cy.get("[name='password']").click().type("admin123")
   

     
    })

})