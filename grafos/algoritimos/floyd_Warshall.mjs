const floyd_warshall = graph => {
    const dist = [];
    const { length } = graph;
    for (let i = 0 ; i < length; i++)
    {
        dist[i] = [];
        for(let j = 0; j < length; j++)
        {
            if(i === j)
            {
                dist[i][j] = 0;
            }
            else if(graph[i][j] === 0)
            {
                dist[i][j] = Infinity;
            }
            else
            {
                dist[i][j] = graph[i][j];
            }
        }
    }
    
    for(let k = 0; k < length; k++)
    {
        for(let i = 0; i < length; i++)
        {
            for(let j = 0; j < length; j++)
            {
                if(dist[i][k] + dist[k][j] < dist[i][j])
                {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}


var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]



console.log(floyd_warshall(graph))