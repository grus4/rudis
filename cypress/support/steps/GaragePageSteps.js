import pm from '../pages/PageManager';
import { registrationData } from '../../fixtures/registrationData';
class GaragePageSteps {
    verifyNavigationToGaragePage () {
        pm.garagePage.getAddCarButton().should( 'be.visible' );
        const regex = '/^https:\/\/qauto2?\.forstudy\.space\/panel\/garage/';
        cy.url(regex)
    }

    addCarToGaragePage () {
        pm.garagePage.getAddCarButton().click();
        pm.garagePage.getBrandDropDownField().select( registrationData.brand );
        pm.garagePage.getModelDropDownField().select( registrationData.model );
        pm.garagePage.getMileageField().type( registrationData.mileage1 );
        pm.garagePage.getAddButton().click();
    }

    verifyCarInTheGarage () {
        cy.get( '.car_name' ).should( 'contain.text', registrationData.brand );
    }

    removeCarFromTheGarage () {
        pm.garagePage.getEditButton().click();
        pm.garagePage.getRemoveCarButton().click();
        pm.garagePage.getRemoveButton().contains('Remove').click();
    }
}

const garagePageSteps = new GaragePageSteps();
export default garagePageSteps;
