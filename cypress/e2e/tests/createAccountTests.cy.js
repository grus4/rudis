import createAccountPageSteps from '../../support/steps/CreateAccountPageSteps';
import garagePageSteps from '../../support/steps/GaragePageSteps';

describe('Create Account', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Create Account with valid data', () => {
        createAccountPageSteps.enterUserInfoInfoWithoutRepeatedPassword();
        createAccountPageSteps.enterConfirmPassword();
        createAccountPageSteps.navigateToGaragePage();
        garagePageSteps.verifyNavigationToGaragePage();
    });
});
