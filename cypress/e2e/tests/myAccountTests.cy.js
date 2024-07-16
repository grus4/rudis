import { registrationData } from '../../fixtures/registrationData';
import sm from '../../support/steps/StepsManager';

describe('Log in to an account', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    });

    it('Adding a new car and fuel expenses to the car', () => {
        sm.garagePageSteps.addCarToGaragePage(
            registrationData.brand,
            registrationData.model,
            registrationData.mileage1
        );
        sm.garagePageSteps.verifyCarInTheGarage();
        sm.garagePageSteps.navigateToFuelExpensesTab();
        sm.fuelExpensesPageSteps.addingAnExpenseToTheCar(
            registrationData.mileage2,
            registrationData.numberOfLitres,
            registrationData.totalCost
        );
        sm.fuelExpensesPageSteps.verifyExpnsesWereAdded();
    });

    it('Adding a new car to the Garage page and removing it', () => {
        sm.garagePageSteps.addCarToGaragePage(
            registrationData.brand,
            registrationData.model,
            registrationData.mileage1
        );
        sm.garagePageSteps.verifyCarInTheGarage();
        sm.garagePageSteps.removeCarFromTheGarage();
    });
});
