import {HTMLTagTester} from "./utils/testers.js";
import {DoctypeChecker, HTMLTagChecker} from "./utils/checkers.js";

export class ClassOneTester extends HTMLTagTester {
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
}

export class ClassTwoTester extends HTMLTagTester {
    constructor(className) {
        super(className);
        this.elementsToCheck = [
            new HTMLTagChecker('h2', className),
            new HTMLTagChecker('table', className),
            new HTMLTagChecker('th', className),
            new HTMLTagChecker('tr', className),
            new HTMLTagChecker('td', className),
            new HTMLTagChecker('img', className),
            new HTMLTagChecker('a', className),
            new HTMLTagChecker('ul', className),
            new HTMLTagChecker('ol', className),
            new HTMLTagChecker('li', className),
        ];
    }
}

export class ClassThreeTester extends HTMLTagTester {
    constructor(className) {
        super(className);
        this.elementsToCheck = [
            new HTMLTagChecker('main', className),
            new HTMLTagChecker('div', className),
            new HTMLTagChecker('header', className),
            new HTMLTagChecker('section', className),
        ];
    }
}