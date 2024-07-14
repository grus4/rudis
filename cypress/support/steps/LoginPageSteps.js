import { registrationData } from '../../fixtures/registrationData';
import pm from '../pages/PageManager';

class LoginPageSteps {
    loginToAccount() {
        pm.loginPage
            .getloginEmailField()
            .type(registrationData.registeredEmail.trim());
        pm.loginPage
            .getLoginPasswordField()
            .type(registrationData.password.trim());
        pm.loginPage.getloginButton().click();
    }
}

const loginPageSteps = new LoginPageSteps();
export default loginPageSteps;
