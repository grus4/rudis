import { CreateAccountPage } from './CreateAccountPage';
import { GaragePage } from './GaragePage';

class PageManager {
    createAccountPage = new CreateAccountPage();
    garagePage = new GaragePage();
}

const pm = new PageManager();
export default pm;
