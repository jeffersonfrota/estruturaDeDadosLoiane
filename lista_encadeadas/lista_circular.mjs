import {defaltEquals} from './util.mjs';
import {Node} from './models/linked-list-models.mjs';
import {Linked_list} from './lista_encadeada.mjs';


class Circular_linked_list extends Linked_list{
    constructor(equals_fn = defaltEquals){
        super(equals_fn);
    }
    insert(element,index)
    {
        if(index >= 0 && index <= this.count)
        {
            const node = new Node(element);
            let current = this.head;

            if(index === 0)
            {
                if(this.head == null)
                {
                    this.head = node;
                    node.next = this.head;
                }
                else
                {
                    node.next = current;
                    current = this.get_element(this.size());
                    this.head = node;
                    current.next = this.head
                }
            }
            else
            {
                const previous = this.get_element(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    remove_at(index)
    {
        if(index >= 0 && index < this.count)
        {
            let current;
            if(index === 0)
            {
                if(this.size() === 1)
                {
                    this.head = undefined;
                }
                else
                {
                    const removed = this.head;
                    current = this.get_element(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            }
            else
            {
                const previous = this.get_element(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}


const list_circular = new Circular_linked_list;

list_circular.insert(1,0);
list_circular.insert(2,1);


console.log(list_circular.to_string());

list_circular.remove_at(1);
console.log(list_circular.to_string());
