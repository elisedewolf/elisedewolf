export const navigation ={
    buttonSearch: 'label[for="search"]',
    selectorField: 'div[class="absolute w-full px-2 mt-2 overflow-y-auto divide-y bg-grey3 max-h-96"]',
    linkContact: 'a[href="/contact/"]'
}
export const cookies={
    buttonaccepteren: 'button[class="w-fit inline-flex flex-row items-center px-3 py-1 transition delay-100 border rounded-full group cursor-none solid text-primary border-primary hover:cursor-pointer"]'
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
