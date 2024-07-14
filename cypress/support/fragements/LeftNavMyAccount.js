export class LeftNavMyAccount {
    expensesOption = '.icon-fuel';

    getExpensesOption() {
        return cy.get(this.expensesOption)
    }
}
