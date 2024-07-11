
import sm from '../../support/steps/StepsManager';

describe('Create Account', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Login with Valid Data', () => {
        cy.login();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    })
})
