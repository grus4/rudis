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
});
