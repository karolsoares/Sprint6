///<reference types="cypress"/>

import CommerciCadastro from "../pages/cadastro.page"
import CommerciLogin from "../pages/login.page"

describe("Teste na camada de  Cadastro pelo botão 'Cadastre-se'",() =>{
    before(() =>{
        CommerciLogin.acessarSmartCommerci()
        CommerciLogin.click_botão_entrar()
    })

    it("Validando campo E-mail do cadastro e botão Cadastrar-se",() =>{
        CommerciCadastro.email_cadastro()
        CommerciCadastro.click_botão_cadastrar_se()
    })

    
    it("Validando URL",() => {
        CommerciCadastro.validandoUrl()
    })
})

describe("Teste na camada de Cadastro pelo botão 'Cadastro'", () => {
    before(() =>{
        CommerciLogin.acessarSmartCommerci()
    })

    it("Funcionalidade do botão Cadastro",() =>{
        CommerciCadastro.click_botão_cadastro()
    })

    it("Validando campo preencher Nome",() =>{
        CommerciCadastro.preencher_nome()
    })
})