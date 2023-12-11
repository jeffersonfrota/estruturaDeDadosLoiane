import { Node } from "./models/node.mjs";
import { compare, default_compare } from "../lista_encadeadas/util.mjs";

export default class Binary_search_tree {
    
    constructor(compare_fn = default_compare){
        this.compare_fn = compare_fn;
        this.root = null;
    }

    insert(key)
    {
        if(this.root == null)
        {
            this.root = new Node(key);
        }
        else
        {
            this.#insert_node(this.root, key);
        }
    }

    #insert_node(node, key)
    {   
        if(this.compare_fn(key, node.key) === compare.LESS_THAN)
        {
            if(node.left == null)
            {
                node.left = new Node(key);
            }
            else
            {   
                this.#insert_node(node.left, key);
            }
        }
        
        else
        {
            if(node.right == null)
            {
                node.right = new Node(key);
            }
            else
            {
                this.#insert_node(node.right, key);
            }
        }
    }

    search(key)
    {
        return this.#search_node(this.root, key)
    }

    #search_node(node, key)
    {
       if (node != null)
       {
            const result_compare = this.compare_fn(key, node.key)

            switch(result_compare)
            {
                case compare.LESS_THAN: 
                    return this.#search_node(node.left, key);
                        break;
                case compare.BIGGER_THAN: 
                    return this.#search_node(node.right, key);
                        break;
                case 0: 
                    return true;
                        break;
                default: 
                    return false;
                        break;
            }
       } 
       return false;

        /*

        ***** QUALQUER COISA UTILIZE ESSA FUNCAO AQUI ABAIXO.

        if(node == null)
        {
            return false;
        }
        if(this.compare_fn(key, node.key) === compare.LESS_THAN)
        {
            return this.#search_node(node.left, key);
        }
        else if(this.compare_fn(key, node.key) === compare.BIGGER_THAN)
        {
            return this.#search_node(node.right, key);
        }
        else
        {
            return true
        }
        */
    }

    in_order_traverse(callback)
    {
        this.#in_order_traverse_node(this.root, callback);
    }

    #in_order_traverse_node(node, callback)
    {
        if(node != null)
        {
            this.#in_order_traverse_node(node.left, callback);
            callback(node.key);
            this.#in_order_traverse_node(node.right, callback);
        }
    }

    pre_order_traverse(callback)
    {
        this.#pre_order_traverse_node(this.root, callback);
    }

    #pre_order_traverse_node(node, callback)
    {
        if(node != null)
        {
            callback(node.key);
            this.#pre_order_traverse_node(node.left, callback);
            this.#pre_order_traverse_node(node.right, callback);
        }
    }


    post_order_traverse(callback)
    {
        this.#post_order_traverse_node(this.root, callback);
    }

    #post_order_traverse_node(node, callback)
    {
        if(node != null)
        {
            this.#post_order_traverse_node(node.left, callback);
            this.#post_order_traverse_node(node.right, callback);
            callback(node.key);
        }
    }

    min()
    {
        const val_min = this.#min_node(this.root);
        return val_min.key
    }

    #min_node(node)
    {
        let current = node;
        while(current != null && current.left != null)
        {
            current = current.left;
        }
        return current;
    }

    max()
    {
        const val_max = this.#max_node(this.root);
        return val_max.key
    }

    #max_node(node)
    {
        let current = node;
        while(current != null && current.right != null)
        {
            current = current.right
        };
        return current;
    }
    
    remove(key)
    {
        this.root = this.#remove_node(this.root, key);
    }

    #remove_node(node, key)
    {
        if(node == null)
        {
            return null;
        }
        if(this.compare_fn(key, node.key) === compare.LESS_THAN)
        {
            node.left = this.#remove_node(node.left, key);
            return node;
        }
        else if(this.compare_fn(key, node.key) === compare.BIGGER_THAN)
        {
            node.right = this.#remove_node(node.right, key);
            return node;
        }
        else
        {
            if(node.left == null && node.right == null)
            {
                node = null;
                return node;
            }
            
            if(node.left == null)
            {
                node = node.right;
                return node;
            }
            else if(node.right == null)
            {
                node = node.left;
                return node;
            }

            const aux = this.#min_node(node.right);
            node.key = aux.key;
            node.right = this.#remove_node(node.right, aux.key);
            return node;
        }
    }
}

/*
const tree = new Binary_search_tree();

tree.insert(11)
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

*/
//const print_node = (value) => console.log(value);

//console.log(tree.in_order_traverse(print_node));

//console.log(tree.pre_order_traverse(print_node));
//console.log(tree.post_order_traverse(print_node));
//console.log(tree.search(15))
//console.log(tree.remove(15))
//console.log(tree.in_order_traverse(print_node))
//console.log(tree.min().key)
//console.log(tree.max().key)
//console.log(tree.search(15))

