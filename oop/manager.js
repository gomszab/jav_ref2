class Manager{
    #array;
    #addPersonCallback;

    constructor(){
        this.#array = []
    }

    setAddPersonCallback(callback){
        this.#addPersonCallback = callback;
    }

    addPerson(person){
        this.#array.push(person);
        this.#addPersonCallback(person);
    }

    generateExportString(){
        const result = ['name;birth;zipcode']
        for(const person of this.#array){
            result.push(`${person.name};${person.birth};${person.zipcode}`);
        }
        return result.join('\n');
    }
}