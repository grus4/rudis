import { registrationData } from '../../fixtures/registrationData';
import pm from '../pages/PageManager';

class LoginPageSteps {
    loginToAccount() {
        pm.loginPage.getloginEmailField().type(registrationData.registeredEmail);
        pm.loginPage.getLoginPasswordField().type(registrationData.password);
        pm.loginPage.getloginButton().click();
    }
}

const loginPageSteps = new LoginPageSteps();
export default loginPageSteps;
