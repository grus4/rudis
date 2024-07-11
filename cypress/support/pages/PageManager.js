import { Header } from '../fragements/Header';
import { CreateAccountPage } from './CreateAccountPage';
import { GaragePage } from './GaragePage';
import { LoginPage } from './LoginPage';

class PageManager {
    createAccountPage = new CreateAccountPage();
    garagePage = new GaragePage();
    loginPage = new LoginPage();
    header = new Header();
}

const pm = new PageManager();
export default pm;
