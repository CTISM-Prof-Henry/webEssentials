/**
 * Agrupa testadores de uma aula. Cria elementos HTML na página do testador e manipula DOM diretamente.
 */
export class ClassTester {
    constructor(elementID, eventType, parser, parentElement) {
        this.parentElement = parentElement;
        this.parser = parser;
        this.createHTMLContent();
        this.bindEventListener(elementID, eventType)
    }

    /**
     * Cria os elementos na página do testador que serão testados por esta classe, para que o aluno possa visualizar
     * o que está sendo testado.
     */
    createHTMLContent() {

        // botão
        let a = document.createElement('a');
        a.className = 'btn btn-primary';
        a.id = `btnAula${this.parser.classID}`;
        a.setAttribute('data-bs-toggle', 'collapse');
        a.href = `#aula${this.parser.classID}CollapseDiv`;
        a.setAttribute('role', 'button');
        a.setAttribute('aria-expanded', 'false');
        a.setAttribute('aria-controls', `aula${this.parser.classID}CollapseDiv`);
        a.textContent = `Aula ${this.parser.classID}`;

        let p = document.createElement('p');
        p.appendChild(a);

        // <div class="collapse">
        let collapseDiv = document.createElement('div');
        collapseDiv.className = 'collapse';
        collapseDiv.id = `aula${this.parser.classID}CollapseDiv`;

        // <div class="card card-body">
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card card-body';
        cardDiv.id = `aula${this.parser.classID}CollapseCard`;

        collapseDiv.appendChild(cardDiv);

        this.parser.elementsToCheck.forEach(element => {
            element.build(cardDiv, this.parser.classID);
        });

        this.parentElement.appendChild(p);
        this.parentElement.appendChild(collapseDiv);
    }

    /**
     * Atribui um eventListener a um elemento da página HTML do testador.
     * @param elementID o ID do elemento que disparará os testes
     * @param eventType o tipo de evento (click, change, etc)
     */
    bindEventListener(elementID, eventType) {
        document.getElementById(elementID).addEventListener(eventType, this.testCallback.bind(this));
    }

    /**
     * Método callback para ser associado à um trigger na página html (e.g. clique de um botão no testador).
     * @param event O evento que dispara quando uma ação ocorre na página do testador.
     */
    testCallback(event) {
        const files = document.getElementById('fileInput').files;
        if (!files || (files.length === 0)) {
            const modalElement = document.getElementById('modalError');
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        } else {
            for(let i = 0; i < files.length; i++) {
                if(files[i].name.includes('htm')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const checks = this.parser.test(e.target.result);
                        let countChecked = 0;

                        for(let i = 0; i < checks.length; i++) {
                            countChecked += checks[i];
                            document.getElementById(`inputAula${this.parser.classID}${this.parser.elementsToCheck[i].name}`).checked = checks[i];
                        }
                        if(countChecked === this.parser.elementsToCheck.length) {
                            document.getElementById('btnAula' + this.parser.classID).setAttribute('class', 'btn btn-success');
                        }
                    };
                    reader.readAsText(files[i]);
                    break;
                }
            }
        }
    }
}
