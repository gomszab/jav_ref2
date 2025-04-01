const makeDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

const containerDiv = makeDiv('container');
document.body.appendChild(containerDiv);
const tableDiv = makeDiv('table');

const formDiv = makeDiv('form');

containerDiv.appendChild(tableDiv);
containerDiv.appendChild(formDiv);