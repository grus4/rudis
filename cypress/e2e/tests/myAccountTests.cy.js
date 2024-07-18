import { registrationData } from '../../fixtures/registrationData';
import sm from '../../support/steps/StepsManager';
import carData from '../../fixtures/carData.json';

describe('Log in to an account', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.login();
        sm.garagePageSteps.verifyNavigationToGaragePage();
    });

    it('Adding a new Car and intercept the request', () => {
        cy.intercept('POST', 'api/cars', req => {
            expect(req.body.carBrandId).to.eq(carData.carBrandId);
            expect(req.body.carModelId).to.eq(carData.carModelId);
            expect(req.body.mileage).to.eq(carData.mileage);
        });

        sm.garagePageSteps.addCarToGaragePage(
            registrationData.brand,
            registrationData.model,
            registrationData.mileage1
        );
    });
});
