import {HTMLTester, Tester} from "./utils/testers.js";
import {DoctypeChecker, HTMLTagChecker} from "./utils/checkers.js";

export class ClassOneTester extends Tester {
    constructor(className) {
        super(className);
        this.elementsToCheck = [
            new DoctypeChecker(className),
            new HTMLTagChecker('html', className),
            new HTMLTagChecker('head', className),
            new HTMLTagChecker('body', className),
            new HTMLTagChecker('h1', className),
            new HTMLTagChecker('p', className),
        ];
    }

    test(content) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        let checks = [];
        for(let i = 0; i < this.elementsToCheck.length; i++) {
            checks.push(this.elementsToCheck[i].test(doc));
        }
        return checks;
    }
}

export class ClassOneHTMLTester extends HTMLTester {
    createHTMLContent() {
        let div_card = document.getElementById(this.tester.className + 'CollapseCard');

        this.tester.elementsToCheck.forEach(element => {
            element.build(div_card);
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
                        let countChecked = 0;

                        for(let i = 0; i < checks.length; i++) {
                            countChecked += checks[i];
                            document.getElementById(this.tester.className + this.tester.elementsToCheck[i].name).checked = checks[i];
                        }
                        if(countChecked === this.tester.elementsToCheck.length) {
                            document.getElementById('btn' + this.tester.className).setAttribute('class', 'btn btn-success');
                        }
                    };
                    reader.readAsText(files[i]);
                    break;
                }
            }
        }
    }
}