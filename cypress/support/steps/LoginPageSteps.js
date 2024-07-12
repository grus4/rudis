import { registrationData } from '../../fixtures/registrationData';
import pm from '../pages/PageManager';

class LoginPageSteps {
    loginToAccount() {
        pm.loginPage
            .getloginEmailField()
            .type(Cypress.env('email').trim());
        pm.loginPage
            .getLoginPasswordField()
            .type(Cypress.env('password').trim());
        pm.loginPage.getloginButton().click();
    }
}

const loginPageSteps = new LoginPageSteps();
export default loginPageSteps;
