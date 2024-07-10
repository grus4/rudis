import pm from '../pages/PageManager';
import { registrationData } from '../../fixtures/registrationData';

class CreateAccountPageSteps {
    enterUserInfoInfoWithoutRepeatedPassword() {
        pm.createAccountPage.getSignUpButton().click();
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getNameField().type(registrationData.firstName);
        pm.createAccountPage.getLastNameField().type(registrationData.lastName);
        pm.createAccountPage.getEmailField().type(registrationData.email);
        pm.createAccountPage.getPasswordField().type(registrationData.password);
    }

    enterConfirmPassword() {
        pm.createAccountPage
            .getConfirmPasswordField()
            .type(registrationData.password);
    }

    navigateToGaragePage() {
        pm.createAccountPage.getRegisterButton().click();
    }
}

const createAccountPageSteps = new CreateAccountPageSteps();
export default createAccountPageSteps;
