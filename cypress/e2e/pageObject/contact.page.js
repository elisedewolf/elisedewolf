export const contactForm ={
    fieldform: 'form[class="grid w-full grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8"]',
    inputnaam: 'input[id="name"]',
    inputEmailadres: 'input[id="email"]',
    inputTelefoonnummer: 'input[id="phone"]',
    inputOnderwerp: 'input[id="subject"]',
    inputUwVraag: 'textarea[id="message"]'
};
export function fillInContactform() {
    cy.get(contactForm.fieldform).within(() => {
        cy.get(contactForm.inputnaam)
            .type("elise", { force: true })
        cy.get(contactForm.inputEmailadres)
            .type("elisedewolf@gmail.Com", { force: true })
        cy.get(contactForm.inputTelefoonnummer)
            .type("0474262975", { force: true })
        cy.get(contactForm.inputOnderwerp)
            .type("containerclass", { force: true })
        cy.get(contactForm.inputUwVraag)
            .type("test opdracht", { force: true })
    });
};
