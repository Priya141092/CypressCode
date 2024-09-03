//Assertions
// Implicit and Explicit Assertions

// Implicit Assertions
// -- should and 'and'
//eq, conatins, exists, have.not,include, have.length

//Explicit Assertion
// expect and Assert

describe("Assertions",()=>{

    it("Implicit assertion",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')
       // cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

       cy.url().should('include','orangehrmlive.com')
       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','orangehrm1')

        cy.title().should('include','OrangeHRM')
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')
        //cy.get('.orangehrm-login-branding > img').should('exist')
        cy.get('.orangehrm-login-forgot > .oxd-text').should('have.length','1')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')

    })

    it("Explicit Assertions",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();

        let expname = "xyn";
        cy.get(".oxd-userdropdown-tab").then((x)=>{

            let actname = x.text()
            expect(actname).to.equal(expname)
            expect(actname).to.not.equal(expname)
            // BDD Type assertions
            assert.equal(actname,expname)
//Bdd assestions from chai framework 
// all assertions could be used from there
//TDD assertions
// Tdd style assesrtions


        })

    })
})