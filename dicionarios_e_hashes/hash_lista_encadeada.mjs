import { defalt_to_string } from "../lista_encadeadas/util.mjs";
import { Value_pair } from "./value_pair.mjs";
import { Hash_table } from "./tabela_hash.mjs";
import { Sorted_linked_list } from "../lista_encadeadas/lista_encadeada_ordena.mjs";

class Hash_table_separate_chaining extends Hash_table{
    constructor( to_string_fn = defalt_to_string){
        super(to_string_fn)
    }
    hash_code_djb2(key)
    {
        const table_key = this.to_string_fn(key);
        let hash = 5381;
        for(let i = 0; i < table_key.length; i++)
        {
            hash = (hash * 33) + table_key.charCodeAt(i);
        }
        return hash % 1013;
    }
    
    put(key, value)
    {
        if(key != null && value != null)
        {
            //const position = this.hash_code(key);
            const position = this.hash_code_djb2(key);
            if(this.table[position] == null)
            {
                this.table[position] = new Sorted_linked_list();
            }
            this.table[position].insert(new Value_pair(key, value));
            return true;
        }
        return false;    
    }

    get(key)
    {
        const position = this.hash_code_djb2(key);
        const linked_list = this.table[position];
        if(linked_list != null && !linked_list.is_empty())
        {
            let current = linked_list.get_head();
            while(current != null)
            {
                if(current.element.key === key)
                {
                    return current.element.value;
                }
                current = current.next;
            }

        }
        return undefined;
    }

    remove(key)
    {
        const position = this.hash_code_djb2(key);
        const linked_list = this.table[position];
        if(linked_list != null && !linked_list.is_empty())
        {
            let current = linked_list.get_head();
            while(current != null)
            {
                if(current.element.key === key)
                {
                    linked_list.remove(current.element);
                    if(linked_list.is_empty()){
                        delete this.table[position];
                    }
                    return true
                }
                current = current.next;
            }
        }
        return false;
    }

    to_string()
    {
        if(this.is_empty()){
            return'';
        }
        const keys = Object.keys(this.table);
        let obj_string = (`{${keys[0]} => ${this.table[keys[0]].head.element.to_string()}}\n`);
        for(let i = 1; i < keys.length; i++)
        {   
            obj_string += (`{${keys[i]} => ${this.table[keys[i]].head.element.to_string()}}\n`);
            
            for(let j = 0,current = this.table[keys[i]].head.next; j < this.table[keys[i]].size() && current != null; j++)
            {
                obj_string += (`{${keys[i]} => ${current.element.to_string()}}\n`);
                current = current.next
            }
        }
        return obj_string
    }

}

const hash = new Hash_table_separate_chaining();

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

console.log(hash.to_string());
hash.remove("Sue");
console.log(hash.get("Jamie"));
