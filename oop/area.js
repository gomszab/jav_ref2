class Area{

    #div;

    get div(){
        return this.#div;
    }

    constructor(className){
        let containerDiv = document.querySelector('.containeroop');
        if(!containerDiv){
            containerDiv = document.createElement('div');
            containerDiv.className = 'containeroop';
            document.body.appendChild(containerDiv);
        }
        this.#div = document.createElement('div');
        this.#div.className = className;
        containerDiv.appendChild(this.#div);
    }
}

class Table extends Area {
    constructor(cssClass){
        super(cssClass);    
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
    }
}

class Form extends Area {
    constructor(cssClass){
        super(cssClass);    
        const form = document.createElement('form');
        this.div.appendChild(form);
        const fieldElementList = [{
            fieldid: 'name',
            fieldLabel: 'név'
        },
        {
            fieldid: 'birth',
            fieldLabel: 'születési év'
        },
        {
            fieldid: 'zipcode',
            fieldLabel: 'irányítószám'
        }]
        
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
    }
}