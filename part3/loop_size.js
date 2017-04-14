function loop_size(node){
  let i = 1;
  node.seen = true;
  if (node.next.seen) {
    return i;
  } else {
    let start = node;
    let finish = node.getNext();
    while (start !== finish) {
      i++;
      finish = finish.getNext();
    }
  }
  return i;
}
