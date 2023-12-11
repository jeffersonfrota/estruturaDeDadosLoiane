import {defaltEquals} from './util.mjs';
import {Node} from './models/linked-list-models.mjs';

export class Linked_list {
    
    constructor( equals_fn = defaltEquals){
        this.count = 0;
        this.head = undefined;
        this.equals_fn = equals_fn;
    }
    
    push(element)
    {   
        const node = new Node(element);
        let current;
       
        if(this.head == null)
        {
            this.head = node;
        }else 
        {
            current = this.head;
            
            while(current.next != null)
            {
                current = current.next;
            }

            current.next = node;
        }
        
        this.count++;
    }

    remove_at(index)
    {
        if(index >= 0 && index < this.count)
        {
            let current = this.head
            if(index === 0)
            {
                this.head = current.next;
            }else
            {
                const previos = this.get_element(index - 1);
                /*
                let previos;
                for(let i = 0; i < index; i++)
                {
                    previos = current;
                    current = current.next;
                }
                previos.next = current.next
                */
               current = previos.next;
               previos.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    get_element(index)
    {
        if(index >=0 && index <= this.count)
        {
            let node = this.head;
            for(let i = 0; i < index && node != null; i++)
            {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    insert(element, index)
    {
        if(index >= 0 && index <= this.count)
        {
            const node = new Node(element);
            if(index === 0)
            {
            
                const current = this.head;
                node.next = current;
                this.head = node;

            }else
            {
                const previos = this.get_element(index - 1);
                const current = previos.next;
                node.next = current;
                previos.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    index_of(element)
    {
        let current = this.head;
        for(let i = 0; i < this.count && current != null; i++)
        {
            if(this.equals_fn(element, current.element))
            {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element)
    {
        const index = this.index_of(element);
        return this.remove_at(index);
    }
    size()
    {
        return this.count;
    }
    is_empty()
    {
        return this.size() === 0;
    }
    get_head()
    {
        return this.head;
    }
    to_string()
    {
        if(this.head == null)
        {
            return "";
        }
        let obj_string = `${this.head.element}`;
        let current = this.head.next;
        for(let i = 1; i < this.size() && current != null; i++)
        {
            obj_string = `${obj_string}, ${current.element}`;
            current = current.next;
        }
        return obj_string;
    }
}

/*
const list = new Linked_list();

list.push(15);
list.push(10);
list.push(89);

console.log(list);

list.remove_at(0)
list.remove_at(0)

console.log(list);

list.insert(27,1);
list.insert(32,0);

console.log(list);
console.log(list.index_of(27));
console.log(list.to_string());
*/