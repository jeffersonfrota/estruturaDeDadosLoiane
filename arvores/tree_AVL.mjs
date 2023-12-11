import Binary_search_tree from "./tree_binary.mjs";
import { default_compare, compare } from "../lista_encadeadas/util.mjs";
import { Node } from "./models/node.mjs";

const Balance_factor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT:4,
    UNBALANCED_LEFT: 5
}

class AVL_tree extends Binary_search_tree{
    constructor(compare_fn = default_compare){
        super(compare_fn);
        this.compare_fn = compare_fn;
        this.root = null
        
    }

    insert(key)
    {
        this.root = this.#insert_node(this.root, key)
    }

    #insert_node(node, key){
        
        if(node == null)
        {
            return new Node(key);
        }
        else if(this.compare_fn(key, node.key) === compare.LESS_THAN)
        {
            node.left = this.#insert_node(node.left, key);
        }
        else if(this.compare_fn(key, node.key) === compare.BIGGER_THAN)
        {
            node.right = this.#insert_node(node.right, key);
        }
        else
        {
            return node;
        }

        const balance_factor = this.get_balance_factor(node)
        {
            if (balance_factor === Balance_factor.UNBALANCED_LEFT)
            {
                if(this.compare_fn(key, node.left.key) === compare.LESS_THAN)
                {
                    node = this.rotation_LL(node);
                }
                else
                {
                    return this.rotation_LR(node);
                }
            }
            if (balance_factor === Balance_factor.UNBALANCED_RIGHT)
            {
                if(this.compare_fn(key, node.right.key) === compare.BIGGER_THAN)
                {
                    node = this.rotation_RR(node);
                }
                else
                {
                    return this.rotation_RL(node)
                }
            }
            return node;
        }
    }

    remove_node(node, key)
    {
        node = super.remove_node(node, key);
        
        if(node == null)
        {
            return null;
        }

        const balance_factor = this.get_balance_factor(node);

        if(balance_factor === Balance_factor.UNBALANCED_LEFT)
        {
            const balance_factor_left = this.get_balance_factor(node.left);
            
            if(balance_factor_left === Balance_factor.BALANCED || balance_factor_left === Balance_factor.SLIGHTLY_UNBALANCED_LEFT)
            {
                return this.rotation_LL(node);
            }
            if(balance_factor_left === Balance_factor.SLIGHTLY_UNBALANCED_RIGHT)
            {
                return this.rotation_LR(node.left)
            }

        }
        if(balance_factor === Balance_factor.UNBALANCED_RIGHT)
        {
            const balance_factor_right = this.get_balance_factor(node.right);

            if(balance_factor_right === Balance_factor.BALANCED || balance_factor_right === Balance_factor.SLIGHTLY_UNBALANCED_RIGHT)
            {
                return this.rotation_RR(node);
            }
            if(balance_factor_right === Balance_factor.SLIGHTLY_UNBALANCED_LEFT)
            {
                return this.rotation_LR(node.right)
            }
        }
        return node;
    }


    get_node_height(node)
    {
        if(node == null){
            return -1;
        }
        return Math.max(this.get_node_height(node.left), this.get_node_height(node.right)) + 1;
    }

    get_balance_factor(node) 
    {
        const height_difference = this.get_node_height(node.left) - this.get_node_height(node.right);

        switch(height_difference)
        {
            case -2: 
                return Balance_factor.UNBALANCED_RIGHT;
            case -1:
                return Balance_factor.SLIGHTLY_UNBALANCED_RIGHT;           
            case 1:
                return Balance_factor.SLIGHTLY_UNBALANCED_LEFT;
            case 2: 
                return Balance_factor.UNBALANCED_LEFT;
            default:
                return Balance_factor.BALANCED

        }
    }

    rotation_LL(node)
    {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    rotation_RR(node)
    {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;

    }

    rotation_LR(node)
    {
        node.left = this.rotation_RR(node.left);
        return this.rotation_LL(node);
    }

    rotation_RL(node){
        node.right = this.rotation_LL(node.right);
        return this.rotation_RR(node)
    }
}


const tree_avl = new AVL_tree();

tree_avl.insert(11)
tree_avl.insert(7);
tree_avl.insert(15);
tree_avl.insert(5);
tree_avl.insert(3);
tree_avl.insert(9);
tree_avl.insert(8);
tree_avl.insert(10);
tree_avl.insert(13);
tree_avl.insert(12);
tree_avl.insert(14);
tree_avl.insert(20);
tree_avl.insert(18);
tree_avl.insert(25);
tree_avl.insert(6);

const print_node = (value) => console.log(value);

console.log(tree_avl.in_order_traverse(print_node));

//console.log(tree_avl.pre_order_traverse(print_node));
//console.log(tree_avl.post_order_traverse(print_node));
console.log(tree_avl.search(15))
console.log(tree_avl.remove(15))
console.log(tree_avl.remove(tree_avl.min()))

console.log(tree_avl.in_order_traverse(print_node))
console.log(tree_avl.min())
console.log(tree_avl.max())
console.log(tree_avl.search(15))
