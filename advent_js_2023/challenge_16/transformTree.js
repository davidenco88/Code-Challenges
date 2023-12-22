function transformTree(tree) {
  function buildTree(index) {
    if (index >= tree.length || tree[index] === null) return null;

    const root = {
      value: tree[index],
      left: buildTree(2 * index + 1),
      right: buildTree(2 * index + 2),
    };

    return root;
  }

  const newTree = buildTree(0);
  return newTree;
}
