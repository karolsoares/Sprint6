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

    it("Validando campo Data de nacimento",() =>{
        CommerciCadastro.preencher_data_de_nascimento()
    })

    it("Validando campo CPF",() =>{
        CommerciCadastro.cpf()
    })

    it("Validando campo Telefone fixo",() =>{
        CommerciCadastro.telefone_fixo()
    })

    it("Validando campo Celular",() =>{
        CommerciCadastro.celular()
    })

    it("Validando campo E-mail",() =>{
        CommerciCadastro.email()
    })

    it("Validando campo Digite novamente",() =>{
        CommerciCadastro.digitar_novamente_email()
    })

    it("Validando campo Senha",() =>{
        CommerciCadastro.senha()
    })

    it("Validando campo Digitar Novamente(SENHA)",() =>{
        CommerciCadastro.digitar_novamente_senha()
    })
})