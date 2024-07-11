export class Header {
    sigInButton = 'button.header_signin';

    getSignInButton() {
        return cy.get(this.sigInButton);
    }
}
