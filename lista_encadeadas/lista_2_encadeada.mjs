
import {defaltEquals} from './util.mjs';
import {Node} from './models/linked-list-models.mjs';
import {Linked_list} from './lista_encadeada.mjs';

class Doubly_node extends Node {
    constructor(element, next, prev){
        super(element, next);
        this.prev = prev;
    }
}
class Doubly_linked_list extends Linked_list{
    constructor(equals_fn = defaltEquals){
        super(equals_fn);
        this.tail = undefined;
    }
    insert(element, index)
    {
        if(index >= 0 && index <= this.count)
        {
            const node = new Doubly_node(element);
            let current = this.head; 

            if(index === 0)
            {
                if(this.head == null)
                {
                    this.head = node;
                    this.tail = node;
                }else
                {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            }
            else if(index === this.count)
            {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            }
            else
            {
                const previous = this.get_element(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
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
            let current = this.head;
            if(index === 0)
            {
                this.head = current.next;
                if(this.count === 1)
                {
                    this.tail = undefined;
                }
                else
                {
                    this.head.prev = undefined;
                }
            }
            else if(index === this.count - 1) 
            {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            }
            else 
            {
                current = this.get_element(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

const lista_2 = new Doubly_linked_list();

lista_2.insert(1,0);
lista_2.insert(2,1);
lista_2.insert(3,2);

console.log(lista_2.to_string());

lista_2.insert(7,2);
console.log(lista_2.to_string());

lista_2.remove_at(3);
console.log(lista_2.to_string());



