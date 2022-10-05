export const navigation ={
    buttonSearch: 'label[for="search"]',
    selectorField: 'div[class="absolute w-full px-2 mt-2 overflow-y-auto divide-y bg-grey3 max-h-96"]',
    linkContact: 'a[href="/contact/"]'
}
export const cookies={
    buttonaccepteren: '.cookie-banner button'
}
export function searchVragen() {
    cy.get(navigation.buttonSearch)
        .click()
        .type('vragen')
    cy.get(navigation.selectorField).within(() => {
        cy.get(navigation.linkContact)
            .click()
    });
};
export function closeCookiebanner() {

    cy.get(cookies.buttonaccepteren)
        .click()
};
