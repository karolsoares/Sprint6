//   ///<reference types="cypress"/>

import Base from "./base.page";

export default class ComerciLogin extends Base {

    static acessarSmartComerci(){
        cy.visit("https://701523.commercesuite.com.br/")
    }
}
