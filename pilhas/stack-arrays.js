
// CRIANDO UMA CLASSE STACK(PILHA) BASEADA EM ARRAY


class Stack{
    constructor(){
        this.itens = [];
    }
    push(element)
    {
        this.itens.push(element);
    }
    pop()
    {
        return this.itens.pop();
    }
    peek()
    {
        return this.itens[this.itens.length - 1];
    }
    isEmpty()
    {
        return this.itens.length === 0;
    
    }
    size()
    {
        return this.itens.length;
    }
    clear()
    {
        this.itens = [];
    }
    
}
/*
let stack = new Stack();

for(let i = 0; i < 5; i++){
    stack.itens.push(i);
}



console.log(stack);
console.log(stack.peek());
stack.itens.pop();

console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

stack.clear();

console.log(stack);




----------------//---------//--------//----------------------------------

*/

/*
//Classes ES2015 com símbolos no escopo

const _itens  = Symbol('stack_itens');

class Stack {
    constructor(){
        this[_itens] = [];
    }
    push(element){
        this[_itens].push(element);
    }
    print(){
        console.log(this[_itens]);
    }
}

const stack = new Stack();

stack.push(5);
stack.push(7);

let object_symbols = Object.getOwnPropertySymbols(stack);
console.log(object_symbols.length);
console.log(object_symbols);
console.log(object_symbols[0]);
stack[object_symbols[0]].push(1);
stack.print();

*/

//---------------------------------//-----//-----------------------------

//Classes ES2015 com símbolos no escopo

/*

const itens = new WeakMap();


class Stack{
    constructor(){
        itens.set(this,[]);
    }
    push(element)
    {
        const s = itens.get(this);
        s.push(element)
    }
    pop()
    {
        s = itens.get(this);
        const r = s.pop();
        return r;
    }
}

*/


//---------------------------------//-----//-----------------------------


//RESOLVENDO PROBLEMAS USANDO PILHAS 

//CONVERTENDO NUMEROS DECIMAIS PARA BINARIOS


/*
function decimal_to_binary(dec_number){
    
    const rem_stac = new Stack();
    let number = dec_number;
    let rem;
    let binary_string = "";
    
    while(number > 0)
    {
        rem = Math.floor(number % 2);
        rem_stac.push(rem);
        number = Math.floor(number/2);
    }
    while(!rem_stac.isEmpty())
    {
        binary_string += rem_stac.pop().toString();
    }
    return binary_string;
} 

console.log(decimal_to_binary(46));

*/

//---------------------------------//-----//-----------------------------

//ALGORITMO CONVERSOR DE BASE;

function base_converter(dec_number, base){
    
    const rem_stac = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let number = dec_number;
    let rem;
    let base_string = "";
    
    if(!(base >= 2 && base <= 36))
    {
        return "";
    }

    while(number > 0)
    {
        rem = Math.floor(number % base);
        rem_stac.push(rem);
        number = Math.floor(number/base);
    }
    while(!rem_stac.isEmpty())
    {
        base_string += digits[rem_stac.pop()];
    }
    return base_string;
} 

console.log(base_converter(100345,2));
console.log(base_converter(100345,8));
console.log(base_converter(100345,16));
console.log(base_converter(100345,35));




