
import sm from '../../support/steps/StepsManager';

describe('Log in to an account', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Login with Valid Data', () => {
        cy.login();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    })
})
