const array = [];
const containerDiv = makeDiv('container');
document.body.appendChild(containerDiv);
createTable(containerDiv, (bodyOfTable) => {
    createForm(bodyOfTable, containerDiv, array);
    createFileUpload(bodyOfTable, containerDiv, array);
    createFileDownload(containerDiv, array);
    createFilterForm(containerDiv, bodyOfTable, array)
})










