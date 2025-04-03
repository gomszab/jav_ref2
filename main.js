const array = [];
const makeDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

const filter = (personArray, callback) => {
    const result = [];
    for(const element of personArray){
        if(callback(element)){
            result.push(element);
        }
    }
    return result;
}

const createTable = (container, callback) => {
    const tableDiv = makeDiv('table');
    container.appendChild(tableDiv);
    const tableSim = document.createElement('table');
    tableDiv.appendChild(tableSim);
    const tableHead = document.createElement('thead');
    tableSim.appendChild(tableHead);
    const tableHeadRow =  document.createElement('tr');
    tableHead.appendChild(tableHeadRow)
    const theadCells = ['név', 'születési dátum', 'irányítószám'];
    for(const cellContent of theadCells){
        const thcell = document.createElement('th');
        thcell.innerText = cellContent;
        tableHeadRow.appendChild(thcell);
    }
    const tbody = document.createElement('tbody');
    tableSim.appendChild(tbody);
    callback(tbody);
}

const createFileUpload = (tablebody, container, personArray) => {
    const fileInput = document.createElement('input')
    container.appendChild(fileInput);
    fileInput.id='fileinput'
    fileInput.type = 'file';
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
           const fileLines = fileReader.result.split('\n')
           const removedHeadLines = fileLines.slice(1);
           for(const line of removedHeadLines){
                const trimmedLine = line.trim();
                const fields = trimmedLine.split(';');
                const pers = {
                    name: fields[0],
                    birth: fields[1],
                    zipcode: fields[2]
                }
                personArray.push(pers);
                addRow(pers, tablebody);
           }
        }
        fileReader.readAsText(file);
    })
}

const createForm = (tablebody, container, personArray) => {
    const formDiv = makeDiv('form');
    container.appendChild(formDiv);
    const formSim = document.createElement('form');
    formDiv.appendChild(formSim)
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
        formSim.appendChild(field);
        const label = document.createElement('label');
        label.htmlFor = fieldElement.fieldid;
        label.textContent = fieldElement.fieldLabel;
        field.appendChild(label)
        field.appendChild(document.createElement('br'))
        const input = document.createElement('input');
        input.id = fieldElement.fieldid;
        field.appendChild(input)
        field.appendChild(document.createElement('br'))
        const error = document.createElement('span');
        error.className = 'error';
        field.appendChild(error);
    }
    
    const buttonFormSim = document.createElement('button');
    buttonFormSim.textContent = 'hozzáadás';
    formSim.appendChild(buttonFormSim)
    formSim.addEventListener('submit', (e)=> {
        e.preventDefault();
        const valueObject = {}
        const inputFields = e.target.querySelectorAll('input');
        let valid = true;
        for(const inputField of inputFields){
            const error = inputField.parentElement.querySelector('.error');
            if(!error){
                console.error('nincs errorfield');
                return;
            }
            error.textContent = '';
            if(inputField.value === ''){
                error.textContent = 'Kotelezo megadni';
                valid = false;
            }
            valueObject[inputField.id] = inputField.value;
        }
        
        if(valid){
            personArray.push(valueObject);
            addRow(valueObject, tablebody);
        }
    })
}

const addRow = (object, tablebody) => {
    const tableBodyRow = document.createElement('tr');
    tablebody.appendChild(tableBodyRow);
    
    const nameCell = document.createElement('td');
    nameCell.textContent = object.name;
    tableBodyRow.appendChild(nameCell);

    const birthCell = document.createElement('td');
    birthCell.textContent = object.birth;
    tableBodyRow.appendChild(birthCell);

    const zipCodeCell = document.createElement('td');
    zipCodeCell.textContent = object.zipcode;
    tableBodyRow.appendChild(zipCodeCell);
}

const createFileDownload = (container, personArray) => {
    const exportButton = document.createElement('button');
    exportButton.textContent = 'Letöltés';
    container.appendChild(exportButton);
    exportButton.addEventListener('click', () => {
        const link = document.createElement('a');
        const contentArray = ['name;birth;zipcode']
        for(const pers of personArray){
            contentArray.push(`${pers.name};${pers.birth};${pers.zipcode}`);
        }
        const content = contentArray.join('\n');
        const file = new Blob([content])
        link.href = URL.createObjectURL(file);
        link.download = 'newdata.csv'
        link.click();
        URL.revokeObjectURL(link.href);
    })
}

const createFilterForm = (container, tablebody, personArray ) => {
    const filterFormDiv = makeDiv('filterForm')
    container.appendChild(filterFormDiv);
    
    const formForFilter = document.createElement('form');
    filterFormDiv.appendChild(formForFilter);
    const select = document.createElement('select');
    formForFilter.appendChild(select);
    const options = [{
        value: '',
        innerText: ''
    },
    {
        value: 'birth',
        innerText: 'születési dátum'
    },
    {
        value: 'zipcode',
        innerText: 'irányítószám'
    }]
    for(const option of options){
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.innerText = option.innerText
        select.appendChild(optionElement);
    }
    
    const input =  document.createElement('input');
    input.id='filterInput';
    formForFilter.appendChild(input);
    
    const button = document.createElement('button');
    button.innerText = 'Szures';
    formForFilter.appendChild(button);
    formForFilter.addEventListener('submit', (e) => {
        e.preventDefault();
        const filterInput = e.target.querySelector('#filterInput');
        const select = e.target.querySelector('select');
    
        const filteredArray = filter(personArray, (element) => {
            if(select.value == 'birth'){
                if(filterInput.value === element.birth){
                    return true;
                }
            }else if(select.value == 'zipcode'){
                if(filterInput.value === element.zipcode){
                    return true;
                }
            }else{
                return true;
            }
        })
    
        tablebody.innerHTML = '';
        for(const filteredElement of filteredArray){
            addRow(filteredElement, tablebody);
        }
    })
}

const containerDiv = makeDiv('container');
document.body.appendChild(containerDiv);
createTable(containerDiv, (bodyOfTable) => {
    createForm(bodyOfTable, containerDiv, array);
    createFileUpload(bodyOfTable, containerDiv, array);
    createFileDownload(containerDiv, array);
    createFilterForm(containerDiv, bodyOfTable, array)
})










