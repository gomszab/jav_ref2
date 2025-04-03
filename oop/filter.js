class Filter extends Area {
    constructor(cssclass, manager){
        super(cssclass, manager);
     
        const form = document.createElement('form');
        this.div.appendChild(form);
        const select = document.createElement('select');
        form.appendChild(select);
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
        form.appendChild(input);
        const button = this.createButton('Szűrés')
        form.appendChild(button);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const filterInput = e.target.querySelector('#filterInput');
            const select = e.target.querySelector('select');
        
            this.manager.filter((element) => {
                if(select.value == 'birth'){
                    if(Number(filterInput.value) === element.birth){
                        return true;
                    }
                }else if(select.value == 'zipcode'){
                    if(Number(filterInput.value) === Number(element.zipcode)){
                        return true;
                    }
                }else{
                    return true;
                }
            })
        
            
        })
    }
}