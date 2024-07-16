import pm from '../pages/PageManager';
import { registrationData } from '../../fixtures/registrationData';
class FuelExpensesPageSteps {
    verifyNavigationToFuelExpensesPage() {
        const regex = '/^https://qauto2?.forstudy.space/panel/expenses/';
        cy.url(regex);
    }

    addingAnExpenseToTheCar() {
        pm.fuelExpensesPage.getAddExpenseButton().click();
        pm.fuelExpensesPage
            .getExpenseMileageField()
            .clear()
            .type(registrationData.mileage2);
        pm.fuelExpensesPage
            .getNumberOfLitresField()
            .type(registrationData.numberOfLitres);
        pm.fuelExpensesPage
            .getTotalCostField()
            .type(registrationData.totalCost);
        pm.fuelExpensesPage.getAddButton().click();
    }

    verifyExpnsesWereAdded() {
        pm.fuelExpensesPage
            .getLitersUsedValue()
            .should('contain.text', `${registrationData.numberOfLitres}L`);
        pm.fuelExpensesPage
            .getTotalCostValue().should('contain.text', `${registrationData.totalCost}`);
    }
}

const fuelExpensesPageSteps = new FuelExpensesPageSteps();
export default fuelExpensesPageSteps;
