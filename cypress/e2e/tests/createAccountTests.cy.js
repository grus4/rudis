import sm from '../../support/steps/StepsManager';

describe('Create Account', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it.skip('Create Account with valid data', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithoutRepeatedPassword();
        sm.createAccountPageSteps.enterConfirmPassword();
        sm.createAccountPageSteps.navigateToGaragePage();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    });

    it.skip('The empty Name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyNameField();
        
    });

    it.skip('The wrong length of entered characters in the Name field', () => {
        sm.createAccountPageSteps.enterLessThanMinCharactersInTheNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingWrongLengthOfEneteredCharactersInTheNameField;
    });

    it.skip('should display error for empty Last name field', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyLastNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyLastNameField();
    });

    it.skip('The wrong length of entered characters in the Last Name field', () => {
        sm.createAccountPageSteps.enterMoreThanMaxNumberOfCharactersInTheLastNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingWrongLengthOfEneteredCharactersInTheLastNameField();
    });

    it.skip('The empty Email field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyEmailField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyEmailField();
    });

    it.skip('The invalid Email field validation', () => {
       sm.createAccountPageSteps.enterUserInfoInfoWithInvalidEmail();
       sm.createAccountPageSteps.registerButtonIsDisabled();
       sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidEmail();
    });

    it.skip('The empty Password field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyPasswordField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyPasswordField();
    });

    it('Invalid Password field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidPassword();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidPassword();
    });

    it.skip('should display error for empty Re-Password field', () => {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type('Max');
        pm.createAccountPage.getLastNameField().type('Danish');
        pm.createAccountPage.getEmailField().type(generateRandomEmail());
        pm.createAccountPage.getPasswordField().type('Qwert_1234!');
        pm.createAccountPage.getRegisterButton().should('be.disabled');
        pm.createAccountPage.getConfirmPasswordField().focus().blur();
        cy.contains('Re-enter password required').should('be.visible');
    });

    it.skip('should display error for mismatched Re-Password field', () => {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type('Max');
        pm.createAccountPage.getLastNameField().type('Danish');
        pm.createAccountPage.getEmailField().type(generateRandomEmail());
        pm.createAccountPage.getPasswordField().type('Qwert_1234!');
        pm.createAccountPage
            .getConfirmPasswordField()
            .type('DifferentPassword');
        pm.createAccountPage.getConfirmPasswordField().focus().blur();
        cy.contains('Passwords do not match').should('be.visible');
    });

    it.skip('Login with Valid Data', () => {
        cy.login();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    })
});
