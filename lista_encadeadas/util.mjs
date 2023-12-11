export  function defaltEquals(a,b){
    return a === b;
}

export function defalt_to_string(item)
{
    if(item === null)
    {
        return "NULL";
    }
    else if(item === undefined)
    {
        return "UNDEFINED";
    }
    else if(typeof item === "string" || item instanceof String) 
    {   
        return `${item}`;
    }
    else{
        return item.toString();
    }
}

const compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function default_compare(a, b){
    if(a === b)
    {
        return 0;
    }
    return a < b ? compare.LESS_THAN: compare.BIGGER_THAN;
}

function reverse_compare(a, b){
    if(a === b)
    {
        return 0;
    }
    return a > b ? compare.LESS_THAN: compare.BIGGER_THAN; 
}

export {compare, default_compare, reverse_compare}