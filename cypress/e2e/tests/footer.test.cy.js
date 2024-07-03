
import footer from "../../support/fragments/Footer";
describe( 'getting each header element', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('getting all footer links', () => {
        footer.getAllFooterLinks();
    });

    //getting a Facebook link separaately
    it('getting a Facebook link', () => {
        footer.getFaceBookLink();
    });
    

} );