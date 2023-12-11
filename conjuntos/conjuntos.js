class Set {
    constructor(){
        this.itens = {};
    }
    
    add(element)
    {
        if(!this.has(element))
        {
            this.itens[element] = element;
            return true;
        }
        return false;
    }
    delete(element){
        if(this.has(element))
        {
            delete this.itens[element];
            return true; 
        }
        return false;
    }
    has(element)
    {
        //return element in this.itens;
        return Object.prototype.hasOwnProperty.call(this.itens, element);
    };

    clear()
    {
        this.itens = {};
    };

    size()
    {
        return Object.keys(this.itens).length;
    };

    size_legacy()
    {
        let count = 0;
        for (let key in this.itens) 
        {
            if(this.itens.hasOwnProperty(key))
            {
                count++;
            }
        }
        return count;
    };

    values()
    {
        return Object.values(this.itens);
    };

    values_legacy()
    {
        let values = [];
        for(let key in this.itens)
        {
            if(this.itens.hasOwnProperty(key))
            {
                values.push(key);
            }
        }
        return values;
    };

    union(other_set)
    {
        const union_set = new Set();
        this.values().forEach(value => union_set.add(value));
        other_set.values().forEach(value => union_set.add(value));
        return union_set;
    }

    intersection(other_set)
    {
        const intersection_set = new Set();
        const values = this.values();
        const others_values = other_set.values();

        let bigger_set = values;
        let smaller_set = others_values;

        if(others_values.length - values.length > 0)
        {
            bigger_set = others_values;
            smaller_set = values;
        }

        smaller_set.forEach(value => {
            if(bigger_set.includes(value))
            {
                intersection_set.add(value);
            }
        })
        /*
        for(let i = 0; i < values.length; i++)
        {
            if(other_set.has(values[i]))
            {
                intersection_set.add(values[i]);
            }
        }

        */
        return intersection_set;
    }

    difference(other_set)
    {
        const difference_set = new Set();
        this.values().forEach(value => {
            if(!other_set.has(value))
            {
                difference_set.add(value);
            }
        });
        return difference_set;
    }
    
    is_sub_of_set(other_set)
    {
        if(this.size() > other_set.size())
        {
            return false;
        }    
        let is_sub_set = true;
        this.values().every(value => {
            if(!other_set.has(value))
            {
                is_sub_set = false;
                return false;
            }
            return true;
        });
        return is_sub_set;
    }
}

const set_A = new Set();

set_A.add(1);
set_A.add(2);
set_A.add(3);

const set_B = new Set();

set_B.add(3);
set_B.add(4);
set_B.add(6);

const set_C = new Set();

set_C.add(1);
set_C.add(2);

const union_AB = set_A.union(set_B);
const intersection_AB = set_A.intersection(set_B);
const difference_AB = set_A.difference(set_B);
const difference_BA = set_B.difference(set_A);

const A_sub_B = set_A.is_sub_of_set(set_B);
const C_sub_A = set_C.is_sub_of_set(set_A);
 

console.log(set_A.values());
console.log(set_B.values());
console.log(union_AB.values());
console.log(intersection_AB.values());
console.log(difference_AB.values());
console.log(difference_BA.values());

console.log(A_sub_B);
console.log(C_sub_A);






