class Manager{
    #array;
    #addPersonCallback;
    #renderTableCallback;

    constructor(){
        this.#array = []
    }

    setAddPersonCallback(callback){
        this.#addPersonCallback = callback;
    }

    setRenderTableCallback(callback){
        this.#renderTableCallback = callback;
    }

    addPerson(person){
        this.#array.push(person);
        this.#addPersonCallback(person);
    }

    filter(callback){
        const result = []
        for(const person of this.#array){
            if(callback(person)){
                result.push(person)
            }
        }
        this.#renderTableCallback(result);
    }

    generateExportString(){
        const result = ['name;birth;zipcode']
        for(const person of this.#array){
            result.push(`${person.name};${person.birth};${person.zipcode}`);
        }
        return result.join('\n');
    }
}