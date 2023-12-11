import { min_distance } from "./dijkstra.mjs";
const INF = Number.MAX_SAFE_INTEGER;

const prim = graph => 
{
    const parent = [];
    const key = [];
    const visited = [];
    const { length} = graph;

    for(let i = 0; i < length; i++)
    {
        key[i] = INF;
        visited[i] = false;
    }

    key[0] = 0;
    parent[0] = -1;

    for(let i = 0; i < length - 1; i++)
    {
        const u = min_distance(key, visited);
        visited[u] = true;
        for(let v = 0; v < length; v++)
        {
            if(graph[u][v] && !visited[v] && graph[u][v] < key[v])
            {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    return parent;
}



 var graph = [
    [0,2,4,0,0,0],
    [2,0,2,4,2,0],
    [4,2,0,0,3,0],
    [0,4,0,0,3,2],
    [0,2,3,3,0,2],
    [0,0,0,2,2,0]
];


console.log(prim(graph))