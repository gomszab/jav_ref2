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
}