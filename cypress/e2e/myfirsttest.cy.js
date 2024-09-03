
describe('This is my first test',()=>{

    it('test1',()=>
    {
       
       cy.visit("https://www.orangehrm.com/");
      // cy.title().should('eq','Orangehrm');

    })
})

//npx cypress open
//npx cypress run
//npx cypress run --headed
//npx cypress run --spec --path