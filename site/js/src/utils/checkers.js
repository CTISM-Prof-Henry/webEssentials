/**
 * Classe que encapsula um elemento a ser verificado.
 */
class Checker {
    /**
     * Constrói este checker.
     * @param name Nome do elemento sendo verificado (e.g. uma tag html, doctype, p, a, img, etc)
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Constrói um checkbox para um elemento que será verificado pelo testador.
     * @param parentElement O elemento pai onde o checkbox será adicionado.
     * @param classID o número da aula (e.g. 1, 2, 3).
     */
    build(parentElement, classID) {
        let template = document.createElement('div');
        template.setAttribute('class', 'form-check');
        template.setAttribute('id', 'checkAula' + classID + this.name);

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'form-check-input');
        input.setAttribute('id', 'inputAula' + classID + this.name);
        input.setAttribute('value', '');
        input.addEventListener("click", e => e.preventDefault());
        input.addEventListener("keydown", e => e.preventDefault());

        template.appendChild(input);
        let label = document.createElement('label');
        label.setAttribute('for', 'inputAula' + classID + this.name);
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
    constructor() {
        super('doctype');
    }

    test(doc) {
        return doc.doctype !== null;
    }
}

export class CSSChecker extends Checker {
    isValidSelector(selector) {
        try {
            document.querySelector(selector);
            return true;
        } catch {
            return false;
        }
    }

    hasRequiredSelector(selector) {
        if(!this.isValidSelector(selector)) {
            return false;
        }

        switch (this.name) {
            case 'tag':
                // exactly one type selector: div, h1, custom-element
                return /^[a-zA-Z][a-zA-Z0-9-]*$/.test(selector);

            case 'classe':
                return selector.includes('.');

            case 'id':
                return selector.includes('#');

            case 'pseudoclasse':
                return selector.includes(':');

            default:
                return false;
        }
    }

    test(doc) {
        let rules;
        try {
            rules = doc.cssRules;
        } catch (e) {
            // malformed CSS or unsupported rule
            return false;
        }

        for (const rule of rules) {
            if (!rule.selectorText) {
                continue;
            }

            // selectors can be comma-separated: "p, li, span"
            const selectors = rule.selectorText.split(',').map(s => s.trim());
            for (const selector of selectors) {
                if (this.hasRequiredSelector(selector)) {
                    return true;
                }
            }
        }
        return false;
    }
}