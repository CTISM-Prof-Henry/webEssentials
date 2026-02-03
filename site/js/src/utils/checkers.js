/**
 * Classe que encapsula um elemento a ser verificado.
 */
class Checker {
    /**
     * Constrói este checker.
     * @param name Nome do elemento sendo verificado (e.g. uma tag html, HTML, doctype, p, a, img, etc)
     * @param className o número da aula (e.g. 1, 2, 3).
     */
    constructor(name, className) {
        this.name = name;
        this.classID = className;
    }

    /**
     * Constrói um checkbox para um elemento que será verificado pelo testador.
     * @param parentElement O elemento pai onde o checkbox será adicionado.
     */
    build(parentElement) {
        let template = document.createElement('div');
        template.setAttribute('class', 'form-check');
        template.setAttribute('id', 'checkAula' + this.classID + this.name);

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'form-check-input');
        input.setAttribute('id', 'inputAula' + this.classID + this.name);
        input.setAttribute('value', '');
        input.addEventListener("click", e => e.preventDefault());
        input.addEventListener("keydown", e => e.preventDefault());

        template.appendChild(input);
        let label = document.createElement('label');
        label.setAttribute('for', 'inputAula' + this.classID + this.name);
        label.setAttribute('class', 'form-check-label');
        label.innerHTML = this.name;
        template.appendChild(label);

        parentElement.appendChild(template);
    }

    /**
     * Verifica se um item está presente no documento.
     * @param doc O documento HTML a ser verificado.
     */
    test(doc) {
        throw new Error("Este método deve ser implementado em uma subclasse!");
    }
}

/**
 * Classe que encapsula a verificação de uma tag HTML no documento.
 */
export class HTMLTagChecker extends Checker {
    test(doc) {
        return doc.getElementsByTagName(this.name).length > 0
    }
}

/**
 * Classe que encapsula a verificação da tag <!DOCTYPE> no documento.
 */
export class DoctypeChecker extends HTMLTagChecker {
    constructor(className) {
        super('doctype', className);
    }

    test(doc) {
        return doc.doctype !== null;
    }
}

export class CSSChecker extends Checker {
    test(doc) {

    }
}