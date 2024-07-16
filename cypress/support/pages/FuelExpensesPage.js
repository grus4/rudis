export class FuelExpensesPage {
    addAnExpenseButton = 'app-fuel-expenses .btn-primary';
    numberOfLitresField = '#addExpenseLiters';
    totalCostField = '#addExpenseTotalCost';
    addButton = '.modal-content .btn-primary';
    litersUsedValue = '.expenses_table td:nth-child(3)';
    totalCostValue = '.expenses_table td:nth-child(4)';
    expenseMileageField = '#addExpenseMileage';

    getAddExpenseButton() {
        return cy.get(this.addAnExpenseButton);
    }

    getNumberOfLitresField() {
        return cy.get(this.numberOfLitresField);
    }

    getTotalCostField() {
        return cy.get(this.totalCostField);
    }

    getAddButton() {
        return cy.get(this.addButton);
    }

    getLitersUsedValue() {
        return cy.get(this.litersUsedValue);
    }

    getTotalCostValue() {
        return cy.get(this.totalCostValue); //         .invoke('text')
        //         .then(text => {
        //             const number = parseFloat(text);
        //             const formattedNumber = parseInt(number.toFixed(0));
        //             return formattedNumber.toString();
        //         });
        // }
    }
    

    getExpenseMileageField() {
        return cy.get(this.expenseMileageField);
    }
}
