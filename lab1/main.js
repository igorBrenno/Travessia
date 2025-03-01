import { Node } from "./travesal/node.js";
import { TravesalBinary } from "./travesal/travesal-binary.js";


const root = new Node("A", 1);

root.left = new Node("B", 5);
root.right = new Node("C", 15);
root.left.left = new Node("D", 3);
root.left.right = new Node("E", 7);
root.right.left = new Node("F", 12);
root.right.right = new Node("G", 20);

const tree = new TravesalBinary();

// Adiciona a raiz na árvore
tree.root = root;

// ## Travessia pre-ordem
console.log("Pre Order");
tree.preOrder(tree.root);

console.log("\n");
// ## Travessia em ordem (InOrder)
console.log("In Order");
tree.inOrder(tree.root);

console.log("\n");
// ## Travessia pós-ordem
console.log("Post Order");
tree.postOrder(tree.root);

console.log("\n");

// Depth-First Traversal (DFS) – Travessia em Profundidade
console.log("=".repeat(10));
console.log("Travessia em Profundidade");
tree.breadthFirstTraversal(tree.root);


// Inveter a árvore
console.log("\n");
console.log("Invertendo a árvore");

// Antes de inverter
console.log(tree.toString(tree.root));

console.log("=".repeat(10));

// Depois de inverter
console.log(tree.toString(tree.invertTree(tree.root)));