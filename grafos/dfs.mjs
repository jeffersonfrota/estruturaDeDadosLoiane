import { Colors, initialize_colors} from "./util.mjs";


const depth_first_search = (graph, callback) => 
{
    const vertices = graph.get_vertices();
    const adj_list = graph.get_adj_list();
    const color = initialize_colors(vertices);
    for (let i = 0; i < vertices.length; i++)
    {
        if(color[vertices[i]] === Colors.WHITE)
        {
            depth_first_search_visit(vertices[i], color, adj_list, callback);
        }
    }
}

const depth_first_search_visit = (u, color, adj_list, callback) => {
    color[u] = Colors.GREY;
    if(callback)
    {
        callback(u);
    }

    const neighbors = adj_list.get(u);

    for(let i = 0; i < neighbors.length; i++)
    {
        const w = neighbors[i];
        if(color[w] === Colors.WHITE)
        {
            depth_first_search_visit(w, color, adj_list, callback);
        }
    }
    color[u] = Colors.BLACK;
}


const DFS = graph => {
    const vertices = graph.get_vertices();
    const adj_list = graph.get_adj_list();
    const color = initialize_colors(vertices);

    const d = {};
    const f = {};
    const p = {};
    const time = { count:0 };
    for(let i = 0; i < vertices.length; i++)
    {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }
    for(let i = 0; i < vertices.length; i++)
    {
        if(color[vertices[i]] === Colors.WHITE)
        {
            DFS_visit(vertices[i], color, d, f, p, time, adj_list)
        }
    }
    return{
        discovery: d,
        finished: f,
        predecessors: p
    }

}

const DFS_visit = (u, color, d, f, p, time, adj_list) => 
{
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    const neighbors = adj_list.get(u);
    for(let i = 0; i < neighbors.length; i++)
    {
        const w = neighbors[i];
        if(color[w] === Colors.WHITE)
        {
            p[w] = u;
            DFS_visit(w, color, d, f, p, time, adj_list);
        }
    }

    color[u] = Colors.BLACK;
    f[u] = ++time.count;
} 



export {depth_first_search, DFS}