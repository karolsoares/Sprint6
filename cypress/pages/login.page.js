///<reference types="cypress"/>

import Base from "./base.page";

const BUTTON_ENTRAR= "[data-tray-tst*= login]"
const BUTTON_LOGIN= ".botao-commerce.botao-efetuar-login"

export default class CommerciLogin extends Base {

    static acessarSmartCommerci(){
        cy.visit("https://701523.commercesuite.com.br/")
    }

    static click_botão_entrar(){
        super.clickOnElement(BUTTON_ENTRAR)
    }

    static click_botão_login(){
        super.clickOnElement(BUTTON_LOGIN)
    }

    static validando_url(){
        super.validarUrl("https://701523.commercesuite.com.br/central-do-cliente")
    }


}
