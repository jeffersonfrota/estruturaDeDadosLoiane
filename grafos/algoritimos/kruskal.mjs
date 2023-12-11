const INF = Number.MAX_SAFE_INTEGER
const kruskal = graph => 
{
    const {length} = graph;
    const parent = [];
    let ne = 0;
    let a; let b; let u; let v;
    const cost = initialize_cost(graph);
    
    while(ne < length - 1)
    {
        for(let i = 0, min = INF; i < length; i++){
            for(let j = 0; j < length; j++)
            {
                if(cost[i][j] < min)
                {
                    min = cost[i][j]
                    a = u = i;
                    b = v = j;
                }
            }
        }
        u = find(u, parent);
        v = find(v, parent);
        if(union(u, v, parent))
        {
            ne++;
        }
        cost[a][b] = cost[b][a] = INF;
    }
    return parent;

}

const find = (i, parent) => 
{
    while(parent[i])
    {
        i = parent;
    }
    return i;
}

const union = (i, j, parent) =>
{
    if(i !== j)
    {
        parent[j] = i;
        return true
    }
    return false;
}

const initialize_cost = (graph) => 
{
    const {length} = graph;
    const result = [];

    for(let i = 0; i < length; i++)
    {
        result[i] = [];
        for(let j = 0; j < length; j++)
        {
          
            result[i][j] = graph[i][j];
    
        }
    }
    return result
}

var graph = [
    [0,2,4,0,0,0],
    [2,0,2,4,2,0],
    [4,2,0,0,3,0],
    [0,4,0,0,3,2],
    [0,2,3,3,0,2],
    [0,0,0,2,2,0]
];


console.log(kruskal(graph))
