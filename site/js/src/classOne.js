import {HTMLTester, Tester} from "./utils.js";

export class ClassOneTester extends Tester {
    constructor() {
        super();
        this.elementsToCheck = ['doctype', 'html', 'head', 'body', 'h1', 'p'];
    }

    test(content) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        let checks = [doc.doctype !== null];

        for(let i = 1; i < this.elementsToCheck.length; i++) {
            const fulfilled = doc.getElementsByTagName(this.elementsToCheck[i]).length > 0;
            checks.push(fulfilled);
        }
        return checks;
    }
}

export class ClassOneHTMLTester extends HTMLTester {
    createHTMLContent() {
        let div_card = document.getElementById('class1CollapseCard');

        this.tester.elementsToCheck.forEach(element => {
            let template = document.createElement('div');
            template.setAttribute('class', 'form-check');
            template.setAttribute('id', 'check_' + element);
            let input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('class', 'form-check-input');
            input.setAttribute('id', 'aula1' + element);
            input.setAttribute('value', '');
            input.addEventListener("click", e => e.preventDefault());
            input.addEventListener("keydown", e => e.preventDefault());

            template.appendChild(input);
            let label = document.createElement('label');
            label.setAttribute('for', 'aula1' + element);
            label.setAttribute('class', 'form-check-label');
            label.innerHTML = element;
            template.appendChild(label);

            div_card.appendChild(template);
        });
    }

    testCallback(event) {
        const files = document.getElementById('fileInput').files;
        if (!files) {
            const modalElement = document.getElementById('modalError');
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        } else {
            for(let i = 0; i < files.length; i++) {
                if(files[i].name.includes('htm')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const checks = this.tester.test(e.target.result);
                        let countChecked = checks[0];
                        document.getElementById('aula1doctype').checked = checks[0];

                        for(let i = 1; i < checks.length; i++) {
                            countChecked += checks[i];
                            document.getElementById('aula1' + this.tester.elementsToCheck[i]).checked = checks[i];
                        }
                        if(countChecked === this.tester.elementsToCheck.length) {
                            document.getElementById('btnClass1').setAttribute('class', 'btn btn-success');
                        }
                    };
                    reader.readAsText(files[i]);
                    break;
                }
            }
        }
    }
}