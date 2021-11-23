///<reference types="cypress"/>

import Base from "./base.page";

const BUTTON_CADASTRAR= ".botao-commerce.botao-novo-cadastro.pointer"
const BUTTON_CADASTRO= "[data-tray-tst= cadastro]"
const NOME= "#pf_nome_cliente"
const EMAIL_CADASTRO= "#email_cadastro"
const DATA_DE_NASCIMENTO="#pf_data_nascimento"
const CPF= "#pf_cpf_cliente"
const TELEFONE_FIXO= "#telefone_cliente"
const CELULAR= "#telefone_cliente_2"
const EMAIL_CLIENTE= "#email_cliente"
const REPETIR_EMAIL="#email_cliente2"
const SENHA= "#senha_cliente"
const REPETIR_SENHA= "#senha_cliente2"

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
        super.typeValue(NOME, "Mariana Rodrigues")
    }

    static preencher_data_de_nascimento(){
        super.typeValue(DATA_DE_NASCIMENTO, "151203")
    }

    static cpf(){
        super.typeValue(CPF, "33788977655")
    }

    static telefone_fixo(){
        super.typeValue(TELEFONE_FIXO,"5577882233")
    }

    static celular(){
        super.typeValue(CELULAR,"5567894563")
    }

    static email(){
        super.typeValue(EMAIL_CLIENTE,"mariana@hotmail.com")
    }

    static digitar_novamente_email(){
        super.typeValue(REPETIR_EMAIL,"mariana@hotmail.com")
    }

    static senha(){
        super.typeValue(SENHA,"Mariana123#")
    }

    static digitar_novamente_senha(){
        super.typeValue(REPETIR_SENHA,"Mariana123#")
    }
}


