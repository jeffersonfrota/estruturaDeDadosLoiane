import { default_compare, compare, reverse_compare } from "../lista_encadeadas/util.mjs";

export class Min_heap {
    constructor(compare_fn = default_compare){
        this.compare_fn = compare_fn;
        this.heap = [];
    }

    get_left_index(index)
    {
        return 2 * index + 1;
    }

    get_right_index(index)
    {
        return 2 * index + 2;
    }

    get_parent_index(index)
    {
        if(index === 0)
        {
            return undefined;
        }
        return Math.floor((index - 1)/2);
    }

    insert(value)
    {
        if(value != null)
        {
            this.heap.push(value);
            this.sift_up(this.heap.length - 1);
            return true;
        }

        return false;
    }

    sift_up(index)
    {
        let parent = this.get_parent_index(index) ;
        while (index > 0 && this.compare_fn(this.heap[parent], this.heap[index]) === compare.BIGGER_THAN)
        {
            this.swap(this.heap, parent, index);
            index = parent;
            parent = this.get_parent_index(index)             
        }
    }

    extract()
    {
        if(this.is_empty())
        {
            return undefined;
        }
        
        if(this.size() === 1)
        {
            return this.heap.shift()
        }

        const removed_value = this.heap.shift();
        this.heap.unshift(this.heap[this.heap.length - 1]);
        this.heap.pop();
        this.sift_down(0);
        return removed_value;
    }


    sift_down(index)
    {
        let element = index;
        const left = this.get_left_index(index);
        const right = this.get_right_index(index);
        const size = this.size();

        if(left < size && this.compare_fn(this.heap[element], this.heap[left]) === compare.BIGGER_THAN)
        {
            element = left;
        }

        if(right < size && this.compare_fn(this.heap[element], this.heap[left]) === compare.BIGGER_THAN)
        {
            element = right;
        }

        if(index !== element)
        {
            this.swap(this.heap, index, element);
            this.sift_down(element);
        }
    }

    swap(array, a, b)
    {
        const temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    size()
    {
        return this.heap.length;
    }

    is_empty()
    {
        return this.size() === 0;
    }

    find_minimum()
    {
        return this.is_empty()? undefined : this.heap[0]; 
    }

}


//const heap = new Min_heap()

/*
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log(heap);
console.log("heap size:", heap.size());
console.log("heap is empty:", heap.is_empty());
console.log("heap min value:", heap.find_minimum());

*/

/*
heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(6)
heap.insert(7)
heap.insert(8)
heap.insert(9)
heap.extract(1)
*/

//console.log(heap)

class Max_heap extends Min_heap{
    constructor(compare_fn = reverse_compare){
        super(compare_fn)
        this.compare_fn = compare_fn
    }
}

const heap = new Max_heap();

heap.insert(11)
heap.insert(1)
heap.insert(8)
heap.insert(5)
heap.insert(7)
heap.insert(5)
heap.insert(14)
heap.insert(3)
heap.insert(9)
heap.insert(15)
heap.insert(7)
heap.insert(20) 


console.log(heap);