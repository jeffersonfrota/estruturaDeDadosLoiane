import { Linked_list } from "./lista_encadeada.mjs";
import { defaltEquals, compare, default_compare } from "./util.mjs";

export class Sorted_linked_list extends Linked_list{
    constructor(equals_fn = defaltEquals, compare_fn = default_compare){
        super(equals_fn);
        this.compare_fn = compare_fn;
    }    
    insert(element, index = 0)
    {
        if(this.is_empty())
        {
            return super.insert(element, 0);
        }
        const pos = this.get_index_next_sorted_element(element);
        return super.insert(element, pos);
    }
    get_index_next_sorted_element(element)
    {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++)
        {
            //const comp = this.compare_fn(element.key, current.element.key);
            const comp = this.compare_fn(element, current.element);
            //CASO QUEIRA TESTAR ESSE CODIGO POR ESSE ARQUIVO, UTILIZE O CODIGO COMENTADO.

            if(comp === compare.LESS_THAN)
            {
                return i;
            } 
        current = current.next;
        }
        return i;
    }
}


//const list = new Sorted_linked_list();

//list.insert("juao");
//list.insert("avinaldo");
//list.insert("aa");

//console.log(list.to_string());



