import pm from '../pages/PageManager';
import { registrationData } from '../../fixtures/registrationData';
class GaragePageSteps {
    verifyNavigationToGaragePage() {
        pm.garagePage.getAddCarButton().should('be.visible');
        const regex = '/^https://qauto2?.forstudy.space/panel/garage/';
        cy.url(regex);
    }

    addCarToGaragePage() {
        pm.garagePage.getAddCarButton().click();
        pm.garagePage.getBrandDropDownField().select(registrationData.brand);
        pm.garagePage.getModelDropDownField().select(registrationData.model);
        pm.garagePage.getMileageField().type(registrationData.mileage1);
        pm.garagePage.getAddButton().click();
    }

    verifyCarInTheGarage() {
        pm.garagePage
            .getCarNameText()
            .should(
                'contain.text',
                `${registrationData.brand} ${registrationData.model}`
            );
        pm.garagePage
            .getCarLogo()
            .invoke('attr', 'src')
            .should('include', registrationData.brand.toLocaleLowerCase());
    }

    removeCarFromTheGarage() {
        pm.garagePage.getEditButton().click();
        pm.garagePage.getRemoveCarButton().click();
        pm.garagePage.getRemoveButton().click();
        pm.garagePage.getRemoveButton().should('not.be.visible');
    }

    navigateToFuelExpensesTab() {
        pm.leftNavMyAccount.getExpensesOption().click();
    }
}

const garagePageSteps = new GaragePageSteps();
export default garagePageSteps;
