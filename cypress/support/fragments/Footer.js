class Footer {
    allFooterLinks = '#contactsSection a';
    faceBookLink = '.socials_link:first-child';

    getAllFooterLinks() {
        return cy.get(this.allFooterLinks);
    }

    getFaceBookLink() {
        return cy.get(this.faceBookLink);
    }
}

const footer = new Footer();
export default footer;
