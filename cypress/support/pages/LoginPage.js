export class LoginPage {
    loginEmailField = '#signinEmail';
    loginPasswordField = '#signinPassword';
    loginButton = 'div.modal-footer .btn.btn-primary';

    getloginEmailField() {
        return cy.get(this.loginEmailField);
    }

    getLoginPasswordField() {
        return cy.get(this.loginPasswordField);
    }

    getloginButton() {
        return cy.get(this.loginButton);
    }
}
