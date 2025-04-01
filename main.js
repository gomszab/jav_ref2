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

containerDiv.appendChild(tableDiv);
containerDiv.appendChild(formDiv);