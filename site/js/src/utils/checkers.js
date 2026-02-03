/**
 * Classe que encapsula um elemento a ser verificado.
 */
class Checker {
    constructor(name, className) {
        this.name = name;
        this.classID = className;
    }

    build() {
        throw new Error("Este método deve ser implementado em uma subclasse!");
    }

    test() {
        throw new Error("Este método deve ser implementado em uma subclasse!");
    }
}

export class HTMLTagChecker extends Checker {
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

    test(doc) {
        return doc.getElementsByTagName(this.name).length > 0
    }
}

export class DoctypeChecker extends HTMLTagChecker {
    constructor(className) {
        super('doctype', className);
    }

    test(doc) {
        return doc.doctype !== null;
    }
}