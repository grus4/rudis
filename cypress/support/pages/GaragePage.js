export class GaragePage {
    addCarButton = 'app-garage .btn-primary';
    brandDropDownField = '#addCarBrand';
    modelDropDownField = '#addCarModel';
    mileageField = '#addCarMileage';
    addButton = '.justify-content-end .btn-primary';
    editButton = '.car-list li:nth-child(1) .icon-edit';
    removeCarButton = '.btn-outline-danger';
    removeButton = '.modal-content .btn-danger';
    carName = '.car_name';
    carLogo = '.car_logo .car-logo_img';

    getAddCarButton() {
        return cy.get(this.addCarButton);
    }

    getBrandDropDownField() {
        return cy.get(this.brandDropDownField);
    }

    getModelDropDownField() {
        return cy.get(this.modelDropDownField);
    }

    getMileageField() {
        return cy.get(this.mileageField);
    }

    getAddButton() {
        return cy.get(this.addButton);
    }

    getEditButton() {
        return cy.get(this.editButton);
    }

    getRemoveCarButton() {
        return cy.get(this.removeCarButton);
    }

    getRemoveButton() {
        return cy.get(this.removeButton);
    }

    getCarNameText() {
        return cy.get(this.carName);
    }

    getCarLogo() {
        return cy.get(this.carLogo);
    }
}
