
import footer from "../../support/fragments/Footer";
describe( 'getting each header element', () => {
    beforeEach( () => {
        cy.visit( '/' );
    } );

    it( 'getting all footer links', () => {
        footer.getAllFooterLinks();
    } );

    it.skip( 'getting a Facebook link', () => {
        
    } );

    it.skip( 'getting a Twitter link', () => {

    } );

    it.skip( 'getting a Youtube link', () => {

    } );

    it.skip( 'getting an Instagram link', () => {

    } );
    
    it.skip( 'getting an Ithillel link', () => {

    } );

    it.skip( 'getting a support link', () => {

    } );
    
} );