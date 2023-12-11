import { Queue } from "../filas_e_deques/filas.mjs";
import { Stack } from "../pilhas/objetos_stack.mjs";
import { Colors, initialize_colors} from "./util.mjs"

export const bradth_first_search = (graph, start_vertex, callback) => {
    const vertices = graph.get_vertices();
    const adj_list = graph.get_adj_list();
    const color = initialize_colors(vertices);
    const queue = new Queue();
    queue.enqueue(start_vertex);
    const distances = [];
    const predecessors = [];
    const new_array = [];

    for( let i = 0; i < vertices.length; i++)
    {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }

    while(!queue.is_empty())
    {
        const u = queue.dequeue();
        const neighbors = adj_list.get(u);
        color[u] = Colors.GREY;
        for(let i = 0; i < neighbors.length; i++)
        {
            const w = neighbors[i];
            if(color[w] === Colors.WHITE)
            {
                color[w] = color.GREY
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        new_array.push(u)
        if(callback)
        {
            callback(u)
        }
    }
    return {
        distances,
        predecessors,
        new_array
    }
}


export const paths = (shortrest_path) =>
{
    
    const from_vertex = shortrest_path.new_array[0];
    for(let i = 1; i < shortrest_path.new_array.length; i++)
    {
        const to_vertex = shortrest_path.new_array[i];
        var path = new Stack();
        for(let v = to_vertex; v !== from_vertex; v = shortrest_path.predecessors[v])
        {
            path.push(v)
        }
        path.push(from_vertex);
        let s = path.pop();
        while (!path.isEmpty()){
            s += " - " + path.pop();
        }
        console.log(s)
    }
    return "Shortrest_path: " + `${shortrest_path.new_array[0]}`
}

