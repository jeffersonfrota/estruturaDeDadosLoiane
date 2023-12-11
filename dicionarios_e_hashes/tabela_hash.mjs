import {defalt_to_string} from "../lista_encadeadas/util.mjs"
import { Value_pair} from "./value_pair.mjs";


export class Hash_table {
    constructor(to_string_fn = defalt_to_string){
        this.to_string_fn = to_string_fn;
        this.table = {};
    }
    
    lose_hash_code(key)
    {
        if(typeof key === "number")
        {
            return key;
        }
        const table_key = this.to_string_fn(key);
        let hash = 0;
        for(let i = 0; i < table_key.length; i++)
        {
            hash += table_key.charCodeAt(i);
        }
        return hash % 37;
    }
    
    hash_code(key)
    {
        return this.lose_hash_code(key)
    }

    put(key, value)
    {
        if(key != null && value != null)
        {
            const position = this.hash_code(key);
            this.table[position] = new Value_pair(key, value);
            return true;
        }
        return false;
    }

    get(key){
        const value_pair = this.table[this.hash_code(key)];
        return value_pair == null ? undefined : value_pair.value;
    }

    remove(key){
        const hash = this.hash_code(key);
        const value_pair = this.table[hash];
        if(value_pair != null){
            delete this.table[hash];
            return true;
        }
        return false;
    }
    size()
    {
        return Object.keys(this.table).length;
    }

    is_empty()
    {
        return this.size() === 0;
    }

    to_string()
    {
        if(this.is_empty()){
            return'';
        }
        const keys = Object.keys(this.table);
        let obj_string = `{${keys[0]} => ${this.table[keys[0]].to_string()}}`
        for(let i = 1; i < keys.length; i++)
        {
            obj_string = `${obj_string}, \n{${keys[i]} => ${this.table[keys[i]].to_string()}}`;
        }
        return obj_string;
    }

}

/*const hash = new Hash_table(); */

/*
hash.put("Gandalf", "gandalf@gmail@email.com");
hash.put("John", "johnsnow@gmail@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(hash.hash_code("Gandalf") + " - Gandalf");
console.log(hash.hash_code("John") + " - John");
console.log(hash.hash_code("Tyrion") + " - Tyrion");

hash.remove("Gandalf")
console.log(hash.get("Gandalf"))
*/


/*

hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com')

console.log(hash.to_string())
*/

