class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() { }
    insert(data) {
        const newNode = new BSTNode(data);
        if (!this.root)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (!node.right)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
}
const verifyNextLayer = (layer) => {
    const newLayer = [];
    layer.forEach((node) => {
        if (node.left)
            newLayer.push(node.left);
        if (node.right)
            newLayer.push(node.right);
    });
    return newLayer;
};
function main() {
    const secondLine = [
        "1",
        "3",
        "2",
        "5",
        "4",
        "6",
        "7",
        "9",
        "8",
        "11",
        "13",
        "12",
        "10",
        "15",
        "14",
    ];
    const nodes = secondLine.map((string) => Number(string));
    const tree = new BinarySearchTree();
    nodes.forEach((element) => {
        tree.insert(element);
    });
    let height = 0;
    let layer = [tree.root];
    while (layer.length > 0) {
        const newLayer = verifyNextLayer(layer);
        if (newLayer.length === 0)
            break;
        height += 1;
        layer = newLayer;
    }
    console.log(height);
}
main();
