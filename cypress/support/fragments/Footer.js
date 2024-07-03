class Footer {
    allFooterLinks = '#contactsSection a';

    getAllFooterLinks () {
        cy.get( this.allFooterLinks );
    }
}

const footer = new Footer();
export default footer;