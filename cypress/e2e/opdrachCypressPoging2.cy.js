/// <reference types="Cypress" />

import { contactForm, fillInContactform } from "./pageObject/contact.page";
import { closeCookiebanner, cookies, navigation, searchVragen } from "./pageObject/home.page";


context('test phanes', () => {

    describe('form home page to contactform', () => {

        beforeEach(() => {
            cy.visit('https://develop--appeelio-phanes.netlify.app/');
        });

        it('Close cookiebanner', () => {
            closeCookiebanner()
        });

        it('Go to search and query vragen', () => {
            closeCookiebanner()
            searchVragen()
        });

        it('Check page contain vragen', () => {
            closeCookiebanner()
            searchVragen()
            cy.contains("vragen")
        });

        it('Fill in contact form', () => {
            closeCookiebanner()
            searchVragen()
            fillInContactform()
        });

        it('Check inputfield uw vraag', () => {
            closeCookiebanner()
            searchVragen()
            fillInContactform()
            cy.get(contactForm.inputUwVraag).should('have.value', "test opdracht")
        });
    });
});

function testgit(){
    console.log(test)
}


