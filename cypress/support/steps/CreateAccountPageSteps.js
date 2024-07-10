import createAccountPage from '../pages/CreateAccountPage';
import { registrationData } from '../../fixtures/registrationData';

class CreateAccountPageSteps {
    enterUserInfoInfoWithoutRepeatedPassword() {
        createAccountPage.getSignUpButton().click();
        createAccountPage.getNameField().type(registrationData.firstName);
        createAccountPage.getLastNameField().type(registrationData.lastName);
        createAccountPage.getEmailField().type(registrationData.email);
        createAccountPage.getPasswordField().type(registrationData.password);
    }

    enterConfirmPassword() {
        createAccountPage
            .getConfirmPasswordField()
            .type(registrationData.password);
    }

    navigateToGaragePage() {
        createAccountPage.getRegisterButton().click();
    }
}

const createAccountPageSteps = new CreateAccountPageSteps();
export default createAccountPageSteps;
