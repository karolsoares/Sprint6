export default class Base {

  static getElement(element, index = undefined) {
    let elem;

    if (typeof index !== 'undefined' || index > 0) {
      elem = cy.get(element, { timeout: Cypress.env('global_timeout') }).eq(index);
    } else {
      elem = cy.get(element, { timeout: Cypress.env('global_timeout') });
    }
    return elem;
  }

  static clickOnElement(element, index = undefined, force = false) {
    if (force === true) {
      return this.getElement(element, index).click({ force: true });
    } else {
      return this.getElement(element, index).click();
    }
  }

  static validarUrl(url){
      cy.url().should('include', url)
    }

  static typeValue(element, value, force = false) {
    if (force === true) {
      this.getElement(element).type(value, { force: true });
    } else {
      this.getElement(element).type(value);
    }
    }
    
}
