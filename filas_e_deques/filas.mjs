
export class Queue {
    constructor(){
        this.count = 0;
        this.lowest_count = 0;
        this.itens = {};
    }
    enqueue(element)
    {
        this.itens[this.count] = element;
        this.count++;
    }
    dequeue()
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
    peek()
    {
        if(this.is_empty())
        {
            return undefined;
        }
        return this.itens[this.lowest_count];
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
            return "";
        }
        let obj_string = `${this.itens[this.lowest_count]}`
        for(let i = this.lowest_count + 1; i < this.count; i++)
        {
            obj_string = `${obj_string}, ${this.itens[i]}`;
        }
        return obj_string;
    }
}



/*
function batata_quente(lista_elementos, num){
    
    const queue = new Queue();
    const lista_eliminados = [];
    
    for(let i = 0; i < lista_elementos.length; i++)
    {
        queue.enqueue(lista_elementos[i]);
    }
    while(queue.size() > 1)
    {
        for(let i = 0; i < num; i++)
        {
            queue.enqueue(queue.dequeue());
        }
        lista_eliminados.push(queue.dequeue());
    }
    return {
        eliminados: lista_eliminados,
        vencedor: queue.dequeue()
    };

}
const names = ["Jeff", "Jess", "Camilla", "Jack", "Ingrid"];

result = batata_quente(names, 7);
result.eliminados.forEach(names => 
{
    console.log(`${names} foi eliminado do jogo da batata quente :/`);
});
console.log(`o vencedor foi: ${result.vencedor}`);

*/
