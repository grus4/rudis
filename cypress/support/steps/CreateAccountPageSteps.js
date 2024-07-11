import pm from '../pages/PageManager';
import { registrationData } from '../../fixtures/registrationData';

class CreateAccountPageSteps {
    enterUserInfoInfoWithoutRepeatedPassword() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage.getPasswordField().type(registrationData.password);
    }

    enterUserInfoInfoWithEmptyNameField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().clear();
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage.getPasswordField().type(registrationData.password);
    }

    enterUserInfoInfoWithEmptyLastNameField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getLastNameField().clear();
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage.getPasswordField().type(registrationData.password);
    }

    enterUserInfoInfoWithEmptyEmailField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage.getEmailField().clear();
        pm.createAccountPage.getPasswordField().type(registrationData.password);
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
    
    enterUserInfoWithInvalidPassword() {
        pm.createAccountPage.getPasswordField().type(registrationData.invalidPassword);
    }
    

    enterLessThanMinCharactersInTheNameField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage
            .getNameField()
            .type(registrationData.enteredDataLessThanMinimumAllowed);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage.getPasswordField().type(registrationData.password);
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
        pm.createAccountPage.getPasswordField().type(registrationData.password);
    }

    enterUserInfoInfoWithInvalidEmail() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage
            .getEmailField()
            .type(registrationData.invalidEmail);
        pm.createAccountPage.getPasswordField().type(registrationData.password);
    }

    enterUserInfoInfoWithInvalidPassword() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage
            .getEmailField()
            .type(registrationData.email);
        pm.createAccountPage.getPasswordField().type(registrationData.invalidPassword);
        pm.createAccountPage.getConfirmPasswordField().focus().blur();
    }

    enterUserInfoInfoWithEmptyPasswordField() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage.getPasswordField().focus().blur();
        pm.createAccountPage
            .getConfirmPasswordField()
            .type(registrationData.password);
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

    enterConfirmPassword() {
        pm.createAccountPage
            .getConfirmPasswordField()
            .type(registrationData.password);
    }

    navigateToGaragePage() {
        pm.createAccountPage.getRegisterButton().click();
    }
}

const createAccountPageSteps = new CreateAccountPageSteps();
export default createAccountPageSteps;
