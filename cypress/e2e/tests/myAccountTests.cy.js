import sm from '../../support/steps/StepsManager';

describe('Log in to an account', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    });

    it('Adding a new car to the Garage page', () => {
        sm.garagePageSteps.addCarToGaragePage();
        sm.garagePageSteps.verifyCarInTheGarage();
        sm.garagePageSteps.removeCarFromTheGarage();
    })
})