import {defalt_to_string} from '../lista_encadeadas/util.mjs';
import { Value_pair} from "./value_pair.mjs" 

export class Dictionary{
    constructor(to_str_fn = defalt_to_string){
        this.to_str_fn = to_str_fn;
        this.table = {};
    }
    
    has_key(key)
    {
        return this.table[this.to_str_fn(key)] != null;
    }

    set(key, value)
    {
        if(key != null && value != null)
        {
            const table_key = this.to_str_fn(key);
            this.table[table_key] = new Value_pair(key, value);
            return true;
        }
        return false;
    }
    
    remove(key)
    {
        if(this.has_key(key))
        {
            delete this.table[this.to_str_fn(key)];
            return true;
        }
        return false;
    }

    get(key) 
    {
        const value_pair = this.table[this.to_str_fn(key)];
        return value_pair == null ? undefined : value_pair.value;

       /*
        if(this.has_key(key))
        {
            return this.table_key[this.to_str_fn(key)];
        }
        return undefined;
       */
    }

    key_values()
    {
        return Object.values(this.table);
        /*
        const valuePairs = [];
        for (const k in this.table)
        {
            if (this.hasKey(k)) 
            { 
                valuePairs.push(this.table[k]);
            } 
        } 
        return valuePairs;
        */
    }

    keys()
    {
        return this.key_values().map(value_pair => value_pair.key);
        /*
        const keys = [];
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) 
        { 
            keys.push(valuePairs[i].key);
        }
        return keys
        */
    }
    
    values()
    {
        return this.key_values().map(value_pair => value_pair.value);
    }

    for_each(callback_fn)
    {
        const value_pairs = this.key_values();
        for(let i = 0; i < value_pairs.length; i++)
        {
            const result = callback_fn(value_pairs[i].key, value_pairs[i].value);
            if(result === false)
            {
                break;
            }
        }      
    }

    size()
    {
        return Object.keys(this.table).length;
        //return this.key_values().length
    }

    is_empty()
    {
        return this.size() === 0;
    }

    clear()
    {
        this.table = {}
    }

    to_string()
    {
        if(this.is_empty())
        {
            return '';
        }
        const value_pairs = this.key_values();
        let obj_string = `${value_pairs[0].to_string()}`;
        for(let i = 1; i < value_pairs.length; i++)
        {
            obj_string = `${obj_string}, ${value_pairs[i].to_string()}`
        }
        return obj_string;
    }

}

/*
const dictionary = new Dictionary();

dictionary.set("Gandalf", "Gandalf@email.com");
dictionary.set("John", "Jonhsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.has_key("Gandalf"));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("Tyrion"));
console.log(dictionary.key_values());
console.log(dictionary.remove("John"))
console.log(dictionary.key_values());

dictionary.for_each((k, v)=> {
    console.log(`for:Each: key: ${k}, value: ${v}`);
}) 
*/
