describe('Ionic Tabs Page', () => {

    beforeEach(() => {
        cy.visit('/tabs'); 
    });
    it('should have tabs1 selected by default', () => {
        // verifica que la pestaña tabs1 esté marcada como activa y visible
        cy.get('ion-tab-button[tab="home"]').should('have.attr', 'aria-selected', 'true');
    })
})