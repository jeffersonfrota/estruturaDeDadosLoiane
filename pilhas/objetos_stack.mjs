//Criando uma classe JavaScript Stack baseada em objeto

export class Stack {
    constructor(){
        this.count = 0;
        this.itens = {};
    }
    push(element)
    {
        this.itens[this.count] = element;
        this.count++;
    }
    pop()
    {
        if(this.isEmpty())
        {
            return undefined;
        } 
        this.count--;
        const result = this.itens[this.count];
        delete this.itens[this.count];
        return result;

    }
    size()
    {
        return this.count;
    }
    isEmpty()
    {
        return this.count === 0;
    }
    peek()
    {
        if(this.isEmpty())
        {
            return undefined;
        }
        return this.itens[this.count - 1];
    }
    clear()
    {
        this.count = 0;
        this.itens = {};
    }
    toString()
    {
        if(this.isEmpty())
        {
            return "";
        }
        let objString = `${this.itens[0]}`;
        for(let i = 1; i < this.count; i++)
        {
            objString = `${objString}, ${this.itens[i]}`;
        }
        return objString;
    }
}

/*
const stack = new Stack();

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.itens);

*/

