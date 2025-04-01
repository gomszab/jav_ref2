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
    const input = document.createElement('input');
    input.id = fieldElement.fieldid;
    field.appendChild(document.createElement('br'))
    field.appendChild(input)
}

const buttonFormSim = document.createElement('button');
buttonFormSim.textContent = 'hozzáadás';
formSim.appendChild(buttonFormSim)
formSim.addEventListener('submit', (e)=> {
    e.preventDefault();
    const valueObject = {}
    const inputFields = e.target.querySelectorAll('input');
    for(const inputField of inputFields){
        valueObject[inputField.id] = inputField.value;
    }
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
})

containerDiv.appendChild(tableDiv);
containerDiv.appendChild(formDiv);