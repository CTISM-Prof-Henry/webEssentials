/**
 * Uma classe que realiza testes, mas que não manipula o documento (DOM) de uma página HTML. Isso garante
 * compatibilidade com o node.js.
 */
class Parser {
    constructor(classID, elementsToCheck) {
        this.classID = classID;
        this.elementsToCheck = elementsToCheck;
    }

    test(content) {
        throw new Error("Este método deve ser implementado em uma subclasse!");
    }
}

/**
 * Classe que lê um documento HTML e aplica testadores.
 */
export class HTMLParser extends Parser {
    /**
     * Testa se uma página HTML (fornecida como uma string) atende os critérios dessa classe de teste.
     * @param content Conteúdo da página HTML, como uma string.
     */
    test(content) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        let checks = [];
        for (let i = 0; i < this.elementsToCheck.length; i++) {
            checks.push(this.elementsToCheck[i].test(doc));
        }
        return checks;
    }
}

// TODO implementando!
export class CSSParser extends Parser {
    /**
     * Testa se uma página CSS (fornecida como uma string) atende os critérios dessa classe de teste.
     * @param content Conteúdo da página CSS, como uma string.
     */
    test(content) {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(content);

        let checks = [];
        for (let i = 0; i < this.elementsToCheck.length; i++) {
            checks.push(this.elementsToCheck[i].test(sheet));
        }
        return checks;
    }
}