describe('Financial Data Component', () => {

    beforeEach(() => {
        cy.visit('/apitest'); 
    });
    it('should load and display financial data from API', () => {
        // verifica que datos se muestren correctament en la UI
        cy.get('ion-card').should('have.length', 12);
        cy.get('ion-card:nth-child(1) ion-card-title').should('contain', 'UF');

    })
})