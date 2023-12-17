console.log(transformTree([]))

function transformTree(tree) {
  const nodes = tree.map(value => value === null ? null : {
    value,
    left: null,
    right: null
  })

  for (let i = 0; i < nodes.length; i++) {
    if (2*i + 1 < nodes.length && nodes[2*i + 1] !== null) {
      nodes[i].left = nodes[2*i + 1]
    }
    if (2*i + 2 < nodes.length && nodes[2*i + 2] !== null) {
      nodes[i].right = nodes[2*i + 2]
    }
  }

  return nodes[0] ?? null
}