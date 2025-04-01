class Person {
    #name;
    #birth;
    #zipcode;

    get zipcode(){
        return this.#zipcode;
    }

    get name(){
        return this.#name;
    }

    get birth(){
        return this.#birth;
    }

    constructor(name, birth, zipcode){
        this.#name = name;
        this.#birth = birth;
        this.#zipcode = zipcode;
    }
}