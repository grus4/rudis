class CreateAccountPage {
    signUpButton = '.hero-descriptor_btn';
    nameField = '#signupName';
    lastNameField = '#signupLastName';
    emailField = '#signupEmail';
    passwordField = '#signupPassword';
    confirmPasswordField = '#signupRepeatPassword';
    registerButton = '.modal-footer .btn-primary';

    getSignUpButton() {
        return cy.get(this.signUpButton);
    }

    getNameField() {
        return cy.get(this.nameField);
    }

    getLastNameField() {
        return cy.get(this.lastNameField);
    }

    getEmailField() {
        return cy.get(this.emailField);
    }

    getPasswordField() {
        return cy.get(this.passwordField);
    }

    getConfirmPasswordField() {
        return cy.get(this.confirmPasswordField);
    }

    getRegisterButton() {
        return cy.get(this.registerButton);
    }
}

const createAccountPage = new CreateAccountPage();
export default createAccountPage;
