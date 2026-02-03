export class Tester {
    /**
     * Testa se uma página HTML (fornecida como uma string) atende os critérios dessa classe de teste.
     * @param content Conteúdo da página HTML, como uma string.
     */
    test(content) {
         throw new Error("Este método deve ser implementado em uma subclasse!");
    }
}

export class HTMLTester {
    constructor(elementID, eventType, testerClass) {
        this.tester = new testerClass();
        this.createHTMLContent();
        this.bindEventListener(elementID, eventType)
    }

    /**
     * Cria os elementos na página do testador que serão testados por esta classe, para que o aluno possa visualizar
     * o que está sendo testado.
     */
    createHTMLContent() {
        throw new Error("Este método deve ser implementado em uma subclasse!");
    }

    /**
     * Método callback para ser associado à um trigger na página html (e.g. clique de um botão no testador).
     * @param event O evento que dispara quando uma ação ocorre na página do testador.
     */
    testCallback(event) {
        throw new Error("Este método deve ser implementado em uma subclasse!");
    }

    /**
     * Atribui um eventListener a um elemento da página HTML do testador.
     * @param elementID o ID do elemento que disparará os testes
     * @param eventType o tipo de evento (click, change, etc)
     */
    bindEventListener(elementID, eventType) {
        document.getElementById(elementID).addEventListener(eventType, this.testCallback.bind(this));
    }
}
