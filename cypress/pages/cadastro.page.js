///<reference types="cypress"/>

import Base from "./base.page";

const BUTTON_CADASTRAR= ".botao-commerce.botao-novo-cadastro.pointer"
const BUTTON_CADASTRO= "[data-tray-tst= cadastro]"
const NOME= "#pf_nome_cliente"
const EMAIL_CADASTRO= "#email_cadastro"

export default class CommerciCadastro extends Base {

    static email_cadastro(){
        super.typeValue(EMAIL_CADASTRO, "banana@gmail.com")
    }

    static click_botão_cadastrar_se(){
        super.clickOnElement(BUTTON_CADASTRAR)
    }

    static validandoUrl(){
        super.validarUrl("https://701523.commercesuite.com.br/loja/cadastro_layout.php?loja=701523&frete=&origem=central&IdProd=")
    }

    static click_botão_cadastro(){
        super.clickOnElement(BUTTON_CADASTRO)
    }

    static preencher_nome(){
        super.typeValue(NOME, "mariana@hotmail.com")
    }
}


