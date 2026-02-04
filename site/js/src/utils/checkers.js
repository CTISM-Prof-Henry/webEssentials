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
    hasRequiredSelector(selector) {
        if(this.name === 'tag') {
            // tags são compostas apenas por letras, números, hífens e underscores
            return /^[a-zA-Z0-9\-_]+$/.test(selector);
        } else if(this.name === 'classe') {
            return selector.includes('.');
        } else if(this.name === 'id') {
            return selector.startsWith('#');
        } else if(this.name === 'pseudoclasse') {
            return selector.includes(':');
        }
        return false;
    }

    test(doc) {
        for (const sheet of document.styleSheets) {
            let rules;
            try {
                rules = sheet.cssRules;
            } catch (e) {
                // stylesheet cross-origin (Bootstrap CDN, etc)
                continue;
            }

            for (const rule of rules) {
                if (!rule.selectorText) {
                    continue;
                }

                // selectors can be comma-separated: "p, li, span"
                const selectors = rule.selectorText.split(',').map(s => s.trim());
                for(let j = 0; j < selectors.length; j++) {
                    if(this.hasRequiredSelector(selectors[j])) {
                        // TODO tem que verificar se está ativo!
                        return true;
                    }
                }
            }
        }
        return false;
    }
}