class Header {
    logo = '.header_logo';
    arrayOfHeaderButtons = 'header .btn,.header-link';
    homeNavOption = '.header-link.-active';
    aboutNavOption = 'button[appscrollto="aboutSection"]';
    contactsNavOption = 'button[appscrollto="contactsSection"]';
    guestloginLink = '.header-link.-guest';
    signInButton = '.header_signin';

    getEachHeaderButton() {
        return cy.get(this.arrayOfHeaderButtons);
    }

    getHillelLogo() {
        return cy.get(this.logo);
    }

    getHomeBreadcrumbsElement() {
        return cy.get(this.homeNavOption);
    }

    getAboutBreadcrumbsElement() {
        return cy.get(this.aboutNavOption);
    }

    getContactsBreadcrumbsElement() {
        return cy.get(this.contactsNavOption);
    }

    getSignInButton() {
        return cy.get(this.signInButton);
    }
}

const header = new Header();
export default header;
