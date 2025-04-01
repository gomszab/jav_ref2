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

    #formFieldArray;

    constructor(cssClass, fieldElementList, manager){
        super(cssClass, manager);    
        this.#formFieldArray = []
        const form = document.createElement('form');
        this.div.appendChild(form);
        for(const fieldElement of fieldElementList){
            const formField = new FormField(fieldElement.fieldid, fieldElement.fieldLabel);
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getDiv());   
        }
        
        const button = document.createElement('button');
        button.textContent = 'hozzáadás';
        form.appendChild(button)
        form.addEventListener('submit', (e)=> {
            e.preventDefault();
            const valueObject = {};
            let valid = true;
            for(const formField of this.#formFieldArray){
                formField.error = '';
                if(formField.value === ''){
                    formField.error = 'Kotelezo megadni';
                    valid = false;
                }
                valueObject[formField.id] = formField.value;
            }
            if(valid){
                const person = new Person(valueObject.name, Number(valueObject.birth), Number(valueObject.zipcode));
                this.manager.addPerson(person);
            } 
        })
    }
}

class UploadDownload extends Area{
    constructor(cssClass, manager){
        super(cssClass, manager);
        const input = document.createElement('input')
        input.id ='fileinput';
        input.type ='file'
        this.div.appendChild(input);
        input.addEventListener('change', (e)=>{
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = () => {
               const fileLines = fileReader.result.split('\n')
               const removedHeadLines = fileLines.slice(1);
               for(const line of removedHeadLines){
                    const trimmedLine = line.trim();
                    const fields = trimmedLine.split(';');
                    const person = new Person(fields[0], Number(fields[1]), Number(fields[2]))
                    this.manager.addPerson(person)
               }
            }
            fileReader.readAsText(file);
        })

        const exportButton = document.createElement('button');
        exportButton.textContent = 'Letöltés';
        this.div.appendChild(exportButton);
        exportButton.addEventListener('click', () => {
            const link = document.createElement('a');
            const content = this.manager.generateExportString();
            const file = new Blob([content])
            link.href = URL.createObjectURL(file);
            link.download = 'newdata.csv'
            link.click();
            URL.revokeObjectURL(link.href);
        })
    }
}

class FormField {
    #id;
    #inputElement;
    #labelElement;
    #errorElement;

    get id(){
        return this.#id;
    }

    get value(){
        return this.#inputElement.value;
    }

    set error(value){
        this.#errorElement.textContent = value;
    }

    constructor(id, labelContent){
        this.#id = id;
        this.#labelElement = document.createElement('label');
        this.#labelElement.htmlFor = id;
        this.#labelElement.textContent = labelContent;
        this.#inputElement = document.createElement('input');
        this.#inputElement.id = id;
        this.#errorElement = document.createElement('span');
        this.#errorElement.className = 'error';
    }

    getDiv(){
        const div = makeDiv('field');
        const br1 = document.createElement('br')
        const br2 = document.createElement('br')
        const htmlElements = [this.#labelElement, br1, this.#inputElement, br2, this.#errorElement];
        for(const element of htmlElements){
            div.appendChild(element); 
        }
        return div;
    }
}