/// <reference types="cypress" />
var faker = require ('faker')
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
            
            let nomeFaker = faker.name.firstName()
            let sobrenomeFaker = faker.name.lastName ()
            let emailFaker = faker.internet.email (nomeFaker)
           // var quantidade = 3
            //var quantidade1 = 2
    
            cy.get('.icon-user-unfollow').click()
            cy.fixture('perfil').then(dados =>{
                cy.login(dados.usuario, dados.senha)
            })
            
           cy.visit('/')
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.addprodutos ('Aero Daily Fitness Tee', 'S', 'Brown', 3)


            

            


            cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
            cy.get('#billing_company').clear().type('CASA SÃO GERALDO')
            cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
            cy.get('#billing_address_1').clear().type('Avenida Bernardo Sayao')
            cy.get('#billing_address_2').clear().type('2000')
            cy.get('#billing_city').clear().type('São Paulo')
            cy.get('#select2-billing_state-container').click().type('São Paulo' + '{enter}')
            cy.get('#billing_postcode').clear().type('76485000')
            cy.get('#billing_phone').clear().type('6233816271')
            cy.get('#terms').click()
            cy.get('#place_order').click() 
            
                  
            it(' testeando o git')
           
    });



})