class BSTNode {
  public data: number;
  public left: BSTNode | null;
  public right: BSTNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  public root: BSTNode;
  constructor() {}

  insert(data: number) {
    const newNode = new BSTNode(data);

    if (!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node: BSTNode, newNode: BSTNode) {
    if (newNode.data < node.data) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}

const verifyNextLayer = (layer: BSTNode[]) => {
  const newLayer: BSTNode[] = [];
  layer.forEach((node) => {
    if (node.left) newLayer.push(node.left);
    if (node.right) newLayer.push(node.right);
  });
  return newLayer;
};

export function main() {
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

  let layer: BSTNode[] = [tree.root];
  while (layer.length > 0) {
    const newLayer = verifyNextLayer(layer);
    if (newLayer.length === 0) break;
    height += 1;
    layer = newLayer;
  }
  console.log(height);
}
