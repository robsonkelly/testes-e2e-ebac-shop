/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page'

const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
            
            
           
    
            cy.get('.icon-user-unfollow').click()
            cy.fixture('perfil').then(dados =>{
                cy.login(dados.usuario, dados.senha)
            })
            
           cy.visit('/')
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.addProdutos ('Aero Daily Fitness Tee', 'S', 'Brown', 3)
            cy.addProdutos ('Atomic Endurance Running Tee', 'XL', 'Red', 4)
            cy.addProdutos ('Atomic Endurance Running Tee (V-neck)', 'L', 'Green', 4)
            cy.addProdutos ('Ryker LumaTech™ Tee (Crew-neck)', 'L', 'Red', 2)
            

            


            
            
                  
            
           
    });



})