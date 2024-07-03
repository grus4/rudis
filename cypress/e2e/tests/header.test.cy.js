
import header from '../../support/fragments/header';

describe( 'getting each header element', () => {
    beforeEach( () => {
        cy.visit( '/' );
    } );

    it( 'getting each header button', () => {
        header.getEachHeaderButton();
    } );

    it.skip( 'getting a logo element', () => {

    } );

    it.skip( 'getting a guest login button', () => {

    } );

    it.skip( 'getting guest login button', () => {

    } );
} );