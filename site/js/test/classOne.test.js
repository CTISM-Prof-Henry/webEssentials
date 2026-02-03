import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { ClassOneTester } from '../src/classOne.js';
import { JSDOM } from 'jsdom'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { window } = new JSDOM('');
global.DOMParser = window.DOMParser;

QUnit.module("ClassOne", () => {
    QUnit.test("Testa itens da primeira aula na página do próprio testador", (assert) => {
        const indexPath = resolve(__dirname, '..', '..', 'index.html');
        const text = readFileSync(indexPath, 'utf8');

        const classOneTester = new ClassOneTester();
        let checks = classOneTester.test(text);
        let result = checks.reduce(function (sum, c) { return sum + c; }, 0);

        assert.equal(result, checks.length);
    });
});