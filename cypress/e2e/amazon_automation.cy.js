require('cypress-xpath');

describe("login",()=>{
    it("visiting amazon.in",()=>{
      cy.visit("https://www.amazon.in/");
    })
    it("going to the samsung tv section",()=>{
      cy.get('#nav-hamburger-menu').click();
      cy.get("a[data-menu-id='9']").click();
      cy.get('a[href="/gp/browse.html?node=1389396031&ref_=nav_em_sbc_tvelec_television_0_2_9_2"]').click();
      cy.xpath("//span[contains(text(),'Samsung')]").eq(2).click();
    })
    it("filtering",()=>{
      cy.get(".a-dropdown-prompt").click();
      // cy.get("").select("value").click();
      cy.get("#s-result-sort-select_2").click();
    })
    it("verify samsung text in url",()=>{
      //cy.get('a["/Samsung-inches-Ultra-Smart-QA85QN90BAKXXL/dp/B09Y65HV6N/ref=sr_1_2?qid=1669791286&refinements=p_89%3ASamsung&rnid=3837712031&s=electronics&sr=1-2"]')
         //.invoke('removeAttr', 'target').click()
      cy.xpath("//a[@class='a-link-normal s-no-outline']").eq(1).invoke('removeAttr', 'target').click();
      cy.url().should('contain','Samsung');
    })
})
