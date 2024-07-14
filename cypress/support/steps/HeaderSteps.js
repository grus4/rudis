import pm from '../pages/PageManager';
class HeaderSteps {
    clickSignInButton() {
        pm.header.getSignInButton().click();
    }
}

const headerSteps = new HeaderSteps();
export default headerSteps;
