import {Dictionary} from "../dicionarios_e_hashes/dicionario.mjs"
import { bradth_first_search, paths } from "./bfs.mjs";
import { depth_first_search, DFS } from "./dfs.mjs";

export class Graph {
    constructor(is_directed = false){
        this.is_directed = is_directed;
        this.vertices = [];
        this.adj_list = new Dictionary();
    }

    add_vertex(v)
    {
        if(!this.vertices.includes(v))
        {
            this.vertices.push(v);
            this.adj_list.set(v, []);
        }
    }

    add_edge(v, w)
    {
        if (!this.adj_list.get(v))
        {
            this.add_vertex(v);
        }

        if(!this.adj_list.get(w))
        {
            this.add_vertex(w);
        }
        this.adj_list.get(v).push(w);
        if(!this.is_directed)
        {
            this.adj_list.get(w).push(v);
        }
    }

    get_vertices()
    {
        return this.vertices;
    }

    get_adj_list()
    {
        return this.adj_list;
    }

    to_string()
    {
        let s = "";

        for(let i = 0; i < this.vertices.length; i++)
        {
            s += `${this.vertices[i]} --> `;
            const neighbors = this.adj_list.get(this.vertices[i]);
            for(let j = 0; j < neighbors.length; j++)
            {
                s += `${neighbors[j]}`
            }
            s += "\n";
        }
        return s;
    }

}


const graph = new Graph();

const my_vertices = ["A", "B", "C", "D", "E" ,"F", "G", "H", "T"];

for (let i = 0; i < my_vertices.length; i++){
    graph.add_vertex(my_vertices[i]);
}
graph.add_edge("A", "B");
graph.add_edge("A", "C");
graph.add_edge("A", "D");
graph.add_edge("C", "D");
graph.add_edge("C", "G");
graph.add_edge("D", "G");
graph.add_edge("D", "H");
graph.add_edge("B", "E");
graph.add_edge("B", "F");
graph.add_edge("E", "T");


//console.log(graph.to_string());

const print_vertex = (value) => console.log("Visited vertex:" + value);

//const shortrest_path = bradth_first_search(graph, my_vertices[0], /*print_vertex*/) 
//console.log(shortrest_path);

//const _paths = paths(shortrest_path);
//console.log(_paths);

//depth_first_search(graph, print_vertex);

//console.log(DFS(graph))

const graph_dags = new Graph(true);
const my_vertices_dags = ["A", "B", "C", "D", "E", "F"];

for(let i = 0; i < my_vertices_dags.length; i++)
{
    graph_dags.add_vertex(my_vertices_dags[i])
}

graph_dags.add_edge("A", "C")
graph_dags.add_edge("A", "D")
graph_dags.add_edge("B", "D")
graph_dags.add_edge("B", "E")
graph_dags.add_edge("C", "F")
graph_dags.add_edge("F", "E")



const result = DFS(graph_dags)
console.log(graph_dags.to_string())
console.log(result)

const f_times = result.finished;
let s = "";

for(let count = 0; count < my_vertices_dags.length; count++)
{
    let max = 0;
    let max_name = null;
    for( let i = 0; i < my_vertices_dags.length; i++)
    {
        if(f_times[my_vertices_dags[i]] > max)
        {
            max = f_times[my_vertices_dags[i]];
            max_name = my_vertices_dags[i]
        }
    }
    
    s += " - " + max_name;
    delete f_times[max_name]
} 

console.log(s)




/*

//FORMA ALTERNATIVA AO AO METODO TO_STRING

for (let i = 0; i < my_vertices.length; i++){
    console.log(graph.adj_list.table[my_vertices[i]].to_string());
}
console.log(graph.to_string())

*/


