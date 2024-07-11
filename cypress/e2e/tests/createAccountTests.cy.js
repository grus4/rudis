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

    it.skip('Login with Valid Data', () => {
        cy.login();
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
        sm.createAccountPageSteps
            .verifyingWrongLengthOfEneteredCharactersInTheNameField;
    });

    it.skip('The invalid Name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidName();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidName();
    });

    it.skip('The empty Last name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyLastNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyLastNameField();
    });

    it.skip('The invalid Last Name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidLastName();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidLastName();
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

    it.skip('Invalid Password field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidPassword();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidPassword();
    });

    it.skip('The empty Confirm Password field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyConfirmPasswordField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyConfirmPasswordField();
    });

    it.skip('Verify mismatching Password in the Password and Confirm Password fields', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithoutRepeatedPassword();
        sm.createAccountPageSteps.enterDifferentConfirmPassword();
        sm.createAccountPageSteps.verifyErrorForMismatchingPassword();
    });
});
