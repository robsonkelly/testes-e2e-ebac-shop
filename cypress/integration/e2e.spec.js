/// <reference types="cypress" />
var faker = require ('faker')

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
            var quantidade = 3
            var quantidade1 = 2
    
            cy.get('.icon-user-unfollow').click()
            cy.get('#reg_email').type(emailFaker)
            cy.get('#reg_password').type('caderno.com')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type ('Robsonkelly')
            cy.get('#account_last_name').type ('Braga')
            cy.get('.woocommerce-Button').click()
            cy.visit('/')
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.get ('[class="product-block grid"] ').contains('Aero Daily Fitness Tee').click()
            cy.get('.button-variable-item-S').click()
            cy.get('.button-variable-item-Brown').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should ('contain',  quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
            cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click()
            cy.get('.post-3179 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-S').click()
            cy.get('.button-variable-item-Orange').click()
            cy.get('.input-text').clear().type(quantidade1)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.tbay-woocommerce-breadcrumb > :nth-child(4) > a').click ()
            cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type(quantidade1)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()
            cy.get('.post-3374 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-34').click()
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
            cy.get('.input-text').clear().type(quantidade1)
            cy.get('.single_add_to_cart_button').click()
            cy.get('#cart > .dropdown-toggle').click()
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
            
                  
            
           
    });



})