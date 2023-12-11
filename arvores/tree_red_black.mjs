import Binary_search_tree from "./tree_binary.mjs";
import { compare, default_compare } from "../lista_encadeadas/util.mjs";
import { Node_red_black, Colors } from "./models/node.mjs";



class Tree_red_black extends Binary_search_tree{
    constructor(compare_fn = default_compare)
    {
        super(compare_fn);
        this.compare_fn = compare_fn;
        this.root = null
    }

    insert(key)
    {
        if(this.root == null)
        {
            this.root = new Node_red_black(key);
            this.root.color = Colors.BLACK;
        }
        else
        {
            const new_node = this.insert_node(this.root, key);
            this.fix_tree_properties(new_node);
        }
    }

    insert_node(node, key)
    {
        if(this.compare_fn(key, node.key) === compare.LESS_THAN)
        {
            if(node.left == null)
            {
                node.left = new Node_red_black(key);
                node.left.parent = node;
                return node.left;
            }
            else
            {
                return this.insert_node(node.left, key);
            }
        }
        else if(node.right == null)
        {
            node.right = new Node_red_black(key);
            node.right.parent = node;
            return node.right;
        }
        else
        {
            return this.insert_node(node.right, key)
        }
    }


    fix_tree_properties(node)
    {
        while(node && node.parent && node.parent.is_red() && node.color !== Colors.BLACK)
        {
            let parent = node.parent;
            const grand_parent = parent.parent;

            if(grand_parent && grand_parent.left === parent)
            {
                const uncle = grand_parent.right;
                if(uncle && uncle.color === Colors.RED){
                    grand_parent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grand_parent;
                }
                else
                {
                    if(node === parent.right)
                    {
                        this.rotation_RR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    
                    this.rotation_LL(grand_parent);
                    parent.color = Colors.BLACK;
                    grand_parent.color = Colors.RED;
                    node = parent;
                }
            } 
            else
            {
                const uncle = grand_parent.left;
                if(uncle && uncle.color === Colors.RED)
                {
                    grand_parent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grand_parent;
                }
                else
                {
                    if(node === parent.left)
                    {
                        this.rotation_LL(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    
                    this.rotation_RR(grand_parent);
                    parent.color = Colors.BLACK;
                    grand_parent.color = Colors.RED;
                    node = parent;
                }
            }
        }
        this.root.color = Colors.BLACK;
    }

    rotation_LL(node)
    {
        const tmp = node.left;
        node.left = tmp.right;
        if(tmp.right && tmp.right.key)
        {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if(!node.parent)
        {
            this.root = tmp;
        }
        else{
            if(node === node.parent.left)
            {
                node.parent.left = tmp;
            }
            else
            {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }

    rotation_RR(node)
    {
        const tmp = node.right;
        node.right = tmp.left;
        if(tmp.left && tmp.left.key)
        {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if(!node.parent)
        {
            this.root = tmp;
        }
        else{
            if(node === node.parent.left)
            {
                node.parent.left = tmp;
            }
            else
            {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }
}


const tree = new Tree_red_black();

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

const print_node = (value) => console.log(value);

console.log(tree.in_order_traverse(print_node));

//console.log(tree.pre_order_traverse(print_node));
//console.log(tree.post_order_traverse(print_node));
console.log(tree.search(15))
console.log(tree.remove(15))
console.log(tree.remove(tree.min()))

console.log(tree.in_order_traverse(print_node))
console.log(tree.min())
console.log(tree.max())
console.log(tree.search(15))
