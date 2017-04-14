function sumTheTreeValues(root){
  if (!root.right && !root.left) {
    return root.value;
  } else if (root.left && root.right) {
    return root.value + (sumTheTreeValues(root.left) + sumTheTreeValues(root.right));
  } else if (root.left) {
    return root.value + sumTheTreeValues(root.left)
  } else {
    return root.value + sumTheTreeValues(root.right)
  }
}
