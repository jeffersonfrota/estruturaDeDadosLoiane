
var graph = [
//      A, B, C, D, E, F
/*A*/  [0, 2, 4, 0, 0, 0],
/*B*/  [0, 0, 2, 4, 2, 0],
/*C*/  [0, 0, 0, 0, 3, 0],
/*D*/  [0, 0, 0, 0, 0, 2],
/*E*/  [0, 0, 0, 3, 0, 2],
/*F*/  [0, 0, 0, 0, 0, 0]
]



const INF = Number.MAX_SAFE_INTEGER;

const dijkstra = (graph, src) => {
    const dist = [];
    const visited = [];
    const {length} = graph;
    for(let i = 0; i < length; i++)
    {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for(let i = 0; i < length - 1; i++)
    {
        const u = min_distance(dist, visited);
        visited[u] = true;
        for(let v = 0; v < length; v++)
        {
            if(!visited[v] && graph[u][v] !== 0 &&  dist[u] !== INF && dist[u] + graph[u][v] < dist[v])
            {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
}

export const min_distance = (dist, visited) => {
    let min = INF;
    let min_index = -1;
    for(let v = 0; v < dist.length; v++)
    {
        if(visited[v] === false && dist[v] <= min)
        {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

const result = dijkstra(graph, graph[0][0])
console.log(result);