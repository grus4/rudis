import sm from '../../support/steps/StepsManager';

describe('Create Account', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Create Account with valid data', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithoutRepeatedPassword();
        sm.createAccountPageSteps.enterConfirmPassword();
        sm.createAccountPageSteps.navigateToGaragePage();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    });

    it('Login with Valid Data', () => {
        cy.login();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    });

    it('The empty Name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyNameField();
    });

    it('The wrong length of entered characters in the Name field', () => {
        sm.createAccountPageSteps.enterLessThanMinCharactersInTheNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps
            .verifyingWrongLengthOfEneteredCharactersInTheNameField;
    });

    it('The invalid Name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidName();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidName();
    });

    it('The empty Last name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyLastNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyLastNameField();
    });

    it('The invalid Last Name field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidLastName();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidLastName();
    });

    it('The wrong length of entered characters in the Last Name field', () => {
        sm.createAccountPageSteps.enterMoreThanMaxNumberOfCharactersInTheLastNameField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingWrongLengthOfEneteredCharactersInTheLastNameField();
    });

    it('The empty Email field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyEmailField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyEmailField();
    });

    it('The invalid Email field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidEmail();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidEmail();
    });

    it('The empty Password field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyPasswordField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyPasswordField();
    });

    it('Invalid Password field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithInvalidPassword();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForInvalidPassword();
    });

    it('The empty Confirm Password field validation', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithEmptyConfirmPasswordField();
        sm.createAccountPageSteps.registerButtonIsDisabled();
        sm.createAccountPageSteps.verifyingTheErrorMessageForEmptyConfirmPasswordField();
    });

    it('Verify mismatching Password in the Password and Confirm Password fields', () => {
        sm.createAccountPageSteps.enterUserInfoInfoWithoutRepeatedPassword();
        sm.createAccountPageSteps.enterDifferentConfirmPassword();
        sm.createAccountPageSteps.verifyErrorForMismatchingPassword();
    });
});
