import { Header } from '../fragements/Header';
import { CreateAccountPage } from './CreateAccountPage';
import { GaragePage } from './GaragePage';
import { LoginPage } from './LoginPage';
import { FuelExpensesPage } from './FuelExpensesPage';
import { LeftNavMyAccount } from '../fragements/LeftNavMyAccount';

class PageManager {
    createAccountPage = new CreateAccountPage();
    garagePage = new GaragePage();
    loginPage = new LoginPage();
    header = new Header();
    leftNavMyAccount = new LeftNavMyAccount();
    fuelExpensesPage = new FuelExpensesPage();
}

const pm = new PageManager();
export default pm;
