class Header {
    logo = '.header_logo';
    arrayOfHeaderButtons = 'header .btn,.header-link';
    homeNavOption = '';
    aboutNavOption = '';
    contactsNavOption = '';
    guestloginLink = 'header-link -guest';
    signInButton = '.header_signin';

    getEachHeaderButton () {
        cy.get( this.arrayOfHeaderButtons );
    };
}


const header = new Header();
export default header;