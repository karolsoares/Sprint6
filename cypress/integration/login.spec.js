///<reference types="cypress"/>

import CommerciLogin from "../pages/login.page"

describe("Teste na rota Login",() => {
    before(() =>{
        CommerciLogin.acessarSmartCommerci()
    }) 

    it("Validando botão entrar",() =>{
        CommerciLogin.click_botão_entrar()
    })

    it("Validando botão login", () => { 
        CommerciLogin.click_botão_entrar()
        CommerciLogin.click_botão_login()
    })

    it("Verificar se está na URL correta",() => {
        CommerciLogin.validando_url()
    })

})