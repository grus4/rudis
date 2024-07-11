import pm from '../pages/PageManager';
import { registrationData } from '../../fixtures/registrationData';

class CreateAccountPageSteps {
    enterUserInfoInfoWithoutRepeatedPassword() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.firstName.trim());
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.lastName.trim());
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterUserInfoInfoWithEmptyNameField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().clear();
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.lastName.trim());
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterUserInfoInfoWithEmptyLastNameField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.firstName.trim());
        pm.createAccountPage.getLastNameField().clear();
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterUserInfoInfoWithEmptyEmailField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.firstName.trim());
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.lastName.trim());
        pm.createAccountPage.getEmailField().clear();
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    verifyingTheErrorMessageForEmptyNameField() {
        pm.createAccountPage
            .getNameField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Name required').should('be.visible');
    }

    verifyingTheErrorMessageForEmptyLastNameField() {
        pm.createAccountPage
            .getLastNameField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Last name required').should('be.visible');
    }

    verifyingTheErrorMessageForEmptyEmailField() {
        pm.createAccountPage
            .getEmailField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Email required').should('be.visible');
    }

    verifyingTheErrorMessageForInvalidEmail() {
        pm.createAccountPage
            .getEmailField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Email is incorrect').should('be.visible');
    }

    verifyingTheErrorMessageForEmptyPasswordField() {
        pm.createAccountPage
            .getPasswordField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Password required').should('be.visible');
    }

    verifyingTheErrorMessageForInvalidPassword() {
        pm.createAccountPage
            .getPasswordField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains(
            'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
        ).should('be.visible');
    }

    verifyingTheErrorMessageForEmptyConfirmPasswordField() {
        pm.createAccountPage
            .getConfirmPasswordField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Re-enter password required').should('be.visible');
    }

    verifyErrorForMismatchingPassword() {
        pm.createAccountPage
            .getConfirmPasswordField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Passwords do not match').should('be.visible');
    }

    enterUserInfoWithInvalidPassword() {
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.invalidPassword);
    }

    enterLessThanMinCharactersInTheNameField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.enteredDataLessThanMinimumAllowed);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterMoreThanMaxNumberOfCharactersInTheLastNameField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.enteredDataLessThanMinimumAllowed);
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.enteredDataMoreThanMaxAllowed);
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterUserInfoInfoWithInvalidEmail() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.firstName.trim());
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.lastName.trim());
        pm.createAccountPage
            .getEmailField()
            .type(registrationData.invalidEmail);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterUserInfoInfoWithInvalidPassword() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.firstName.trim());
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.lastName.trim());
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.invalidPassword);
        pm.createAccountPage.getConfirmPasswordField().focus().blur();
    }

    enterUserInfoInfoWithEmptyPasswordField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.firstName.trim());
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.lastName.trim());
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage.getPasswordField().focus().blur();
        pm.createAccountPage
            .getConfirmPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterUserInfoInfoWithEmptyConfirmPasswordField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.firstName.trim());
        pm.createAccountPage
            .getLastNameField()
            .type(registrationData.lastName.trim());
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage
            .getPasswordField()
            .type(registrationData.password, { sensitive: true });
        pm.createAccountPage.getConfirmPasswordField().focus().blur();
    }

    verifyingWrongLengthOfEneteredCharactersInTheNameField() {
        pm.createAccountPage
            .getNameField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Name has to be from 2 to 20 characters long').should(
            'be.visible'
        );
    }

    verifyingWrongLengthOfEneteredCharactersInTheLastNameField() {
        pm.createAccountPage
            .getLastNameField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Last name has to be from 2 to 20 characters long').should(
            'be.visible'
        );
    }

    registerButtonIsDisabled() {
        pm.createAccountPage.getRegisterButton().should('be.disabled');
    }

    registerButtonIsEnabled() {
        pm.createAccountPage.getRegisterButton().should('be.enabled');
    }

    enterConfirmPassword() {
        pm.createAccountPage
            .getConfirmPasswordField()
            .type(registrationData.password, { sensitive: true });
    }

    enterDifferentConfirmPassword() {
        pm.createAccountPage
            .getConfirmPasswordField()
            .type(registrationData.differentPassword, { sensitive: true })
            .focus()
            .blur();
    }

    submitCreateAccountForm() {
        pm.createAccountPage.getRegisterButton().click();
    }

    navigateToGaragePage() {
        pm.createAccountPage.getRegisterButton().click();
    }
}

const createAccountPageSteps = new CreateAccountPageSteps();
export default createAccountPageSteps;
