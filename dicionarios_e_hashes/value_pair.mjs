export class Value_pair{
    constructor(key, value){
        this.key = key;
        this.value = value;      
    }
    to_string() 
    {
        return `[#${this.key}: ${this.value}]`;
    }
}