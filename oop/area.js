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