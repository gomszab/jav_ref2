const separator = document.createElement('hr'); // hogy a html-en egyszeruen megtalalhato legyen az elvalaszto oop es sima kozott
document.body.appendChild(separator);
const fieldConfig = [{
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
const manager = new Manager()
const table = new Table('table', manager);
const form = new Form('form', fieldConfig, manager);