import {ClassTester, Tester} from "./utils/testers.js";
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