class Deque {
    constructor(){
        this.count = 0;
        this.lowest_count = 0;
        this.itens = {};
    }
    add_front(element)
    {
        if(this.is_empty())
        {
            this.add_back(element);
        }
        else if (this.lowest_count > 0)
        {
            this.lowest_count--;
            this.itens[this.lowest_count] = element;
        }
        else
        {
            for(let i = this.count; i > 0; i--){
                this.itens[i] = this.itens[i - 1];
            }
            this.count++;
            this.lowest_count = 0;
            this.itens[0] = element;

        }
    }
    add_back(element)
    {
        
        this.itens[this.count] = element;
        this.count++;
    }
    remove_front()
    {
        if(this.is_empty())
        {
            return undefined
        }
        const result = this.itens[this.lowest_count];
        delete this.itens[this.lowest_count]; 
        this.lowest_count++;
        return result;   
    }    
    remove_back()
    {
        if(this.is_empty())
        {
            return undefined;
        } 
        this.count--;
        const result = this.itens[this.count];
        delete this.itens[this.count];
        return result;
    }
    peek_front()
    {
        if(this.is_empty())
        {
            return undefined;
        }
        return this.itens[this.lowest_count];
    }
    peek_back()
    {
        if(this.is_empty())
        {
            return undefined;
        }
        return this.itens[this.count - 1];   
    }
    is_empty()
    {
        return this.count - this.lowest_count === 0;
        //return this.size() === 0;
    }
    clear()
    {
        this.itens = {};
        this.count = 0;
        this.lowest_count = 0;
    }
    size(){
        return this.count - this.lowest_count;
    }
    to_string()
    {
        if(this.is_empty())
        {
            return "ta vazio";
        }
        let obj_string = `${this.itens[this.lowest_count]}`
        for(let i = this.lowest_count + 1; i < this.count; i++)
        {
            obj_string = `${obj_string}, ${this.itens[i]}`;
        }
        return obj_string;
    }
}


function palindrome_checker(a_string){
    
    if(a_string === undefined || a_string === null || (a_string !== null && a_string.length === 0 ))
    {
        return false;
    }
    
    const deque = new Deque();
    const lower_string = a_string.toLocaleLowerCase().split(' ').join('');
    let is_equal = true;
    let first_char, last_char;
    
    for(let i = 0; i < lower_string.length; i++)
    {
        deque.add_back(lower_string.charAt(i)/* lower_string[i] */)        
    }

    while(deque.size() > 1 && is_equal)
    {
        first_char = deque.remove_front();
        last_char = deque.remove_back();    
    
        if(first_char !== last_char)
        {
            is_equal = false
        }
    } 
    return is_equal;
}

console.log('a', palindrome_checker('a'));
console.log('aa', palindrome_checker('aa'));
console.log('kayak', palindrome_checker('kayak'));
console.log('level', palindrome_checker('level'));
console.log('Was it a car or a cat I saw', palindrome_checker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindrome_checker('Step on no pets'));


