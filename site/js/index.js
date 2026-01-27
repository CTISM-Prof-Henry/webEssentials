class ClassOne {
    constructor() {
        this.createChecks();
        document.getElementById('fileInput').addEventListener('change', this.tester);
    }

    createChecks() {
        let div_card = document.getElementById('class1CollapseCard');

        const elementsToCheck = ['doctype', 'html', 'head', 'body', 'h1', 'p'];

        elementsToCheck.forEach(element => {
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

    tester(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;

            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');

            document.getElementById('aula1doctype').checked = doc.doctype;

            const elementsToCheck = ['html', 'head', 'body', 'h1', 'p'];
            elementsToCheck.forEach(tag => {
                document.getElementById('aula1' + tag).checked = doc.getElementsByTagName(tag).length > 0;
            });
        };
        reader.readAsText(file);
    }
}

function main() {
    let c1 = new ClassOne();
}

main();