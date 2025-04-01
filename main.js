const array = [];
const makeDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

const containerDiv = makeDiv('container');
document.body.appendChild(containerDiv);
const tableDiv = makeDiv('table');
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

const formDiv = makeDiv('form');

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
        array.push(valueObject);
        const tableBodyRow = document.createElement('tr');
        tbody.appendChild(tableBodyRow);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = valueObject.name;
        tableBodyRow.appendChild(nameCell);
    
        const birthCell = document.createElement('td');
        birthCell.textContent = valueObject.birth;
        tableBodyRow.appendChild(birthCell);
    
        const zipCodeCell = document.createElement('td');
        zipCodeCell.textContent = valueObject.zipcode;
        tableBodyRow.appendChild(zipCodeCell);
    }
})

containerDiv.appendChild(tableDiv);
containerDiv.appendChild(formDiv);

const fileInput = document.createElement('input')
containerDiv.appendChild(fileInput);
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
            array.push(pers);
            const tableBodyRow = document.createElement('tr');
            tbody.appendChild(tableBodyRow);
            
            const nameCell = document.createElement('td');
            nameCell.textContent = pers.name;
            tableBodyRow.appendChild(nameCell);
        
            const birthCell = document.createElement('td');
            birthCell.textContent = pers.birth;
            tableBodyRow.appendChild(birthCell);
        
            const zipCodeCell = document.createElement('td');
            zipCodeCell.textContent = pers.zipcode;
            tableBodyRow.appendChild(zipCodeCell);
       }
    }
    fileReader.readAsText(file);
})

const exportButton = document.createElement('button');
exportButton.textContent = 'Letöltés';
containerDiv.appendChild(exportButton);
exportButton.addEventListener('click', () => {
    const link = document.createElement('a');
    const contentArray = ['name;birth;zipcode']
    for(const pers of array){
        contentArray.push(`${pers.name};${pers.birth};${pers.zipcode}`);
    }
    const content = contentArray.join('\n');
    const file = new Blob([content])
    link.href = URL.createObjectURL(file);
    link.download = 'newdata.csv'
    link.click();
    URL.revokeObjectURL(link.href);
})