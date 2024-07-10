class GaragePageSteps {
    verifyNavigationToGaragePage() {
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    }
}

const garagePageSteps = new GaragePageSteps();
export default garagePageSteps;