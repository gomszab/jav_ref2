class Area{

    #div;

    #manager;

    get div(){
        return this.#div;
    }

    get manager(){
        return this.#manager;
    }


    constructor(className, manager){
        this.#manager = manager;
        const container = this.#getContainerDiv();
        this.#div = document.createElement('div');
        this.#div.className = className;
        container.appendChild(this.#div);
    }

    #getContainerDiv(){
        let containerDiv = document.querySelector('.containeroop');
        if(!containerDiv){
            containerDiv = document.createElement('div');
            containerDiv.className = 'containeroop';
            document.body.appendChild(containerDiv);
        }
        return containerDiv;
    }
}

class Table extends Area {
    constructor(cssClass, manager){
        super(cssClass, manager);
        const tbody = this.#createTable();
        this.manager.setAddPersonCallback((pers) => {
            const tableBodyRow = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = pers.name;
            tableBodyRow.appendChild(nameCell);

            const birthCell = document.createElement('td');
            birthCell.textContent = pers.birth;
            tableBodyRow.appendChild(birthCell);

            const zipcodeCell = document.createElement('td');
            zipcodeCell.textContent = pers.zipcode;
            tableBodyRow.appendChild(zipcodeCell);
            tbody.appendChild(tableBodyRow);
        })
    }

    #createTable(){
        const table = document.createElement('table');
        this.div.appendChild(table);
        const thead = document.createElement('thead');
        table.appendChild(thead);
        const theadRow = document.createElement('tr');
        thead.appendChild(theadRow);
        const theadCells = ['név', 'születési dátum', 'irányítószám'];
        for(const cellContent of theadCells){
            const thcell = document.createElement('th');
            thcell.innerText = cellContent;
            theadRow.appendChild(thcell);
        }
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        return tbody;
    }
}

class Form extends Area {
    constructor(cssClass, fieldElementList, manager){
        super(cssClass, manager);    
        const form = document.createElement('form');
        this.div.appendChild(form);
        for(const fieldElement of fieldElementList){
            const field = makeDiv('field');
            form.appendChild(field);
            const label = document.createElement('label');
            label.htmlFor = fieldElement.fieldid;
            label.textContent = fieldElement.fieldLabel;
            field.appendChild(label)
            const input = document.createElement('input');
            input.id = fieldElement.fieldid;
            field.appendChild(document.createElement('br'))
            field.appendChild(input)
        }
        
        const button = document.createElement('button');
        button.textContent = 'hozzáadás';
        form.appendChild(button)
        form.addEventListener('submit', (e)=> {
            e.preventDefault();
            const inputFieldList = e.target.querySelectorAll('input');
            const valueObject = {};
            for(const inputField of inputFieldList){
                valueObject[inputField.id] = inputField.value;
            }
            const person = new Person(valueObject.name, Number(valueObject.birth), Number(valueObject.zipcode));
            this.manager.addPerson(person);
        })
    }
}