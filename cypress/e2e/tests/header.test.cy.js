import header from '../../support/fragments/header';

describe('getting each header element', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('getting each header button', () => {
        header.getEachHeaderButton();
    });

    //getting a logo separaately
    it('getting a logo element', () => {
        header.getHillelLogo();
    });

    //getting a sign in button separately
    it('getting a sign in button', () => {
        header.getSignInButton();
    });

    //getting the home breadcrumbs element separately
    it('getting the home breadcrumbs element', () => {
        header.getHomeBreadcrumbsElement();
    });

    //getting the about breadcrumbs element separately
    it('getting the about breadcrumbs element', () => {
        header.getAboutBreadcrumbsElement();
    });

    //getting the contacts breadcrumbs element separately
    it('getting the contacts breadcrumbs element', () => {
        header.getContactsBreadcrumbsElement();
    });
});
