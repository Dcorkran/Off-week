function array_diff(a, b) {
  // first loop works backwards through array
  for (var i = a.length - 1; i >= 0; i--) {
    // second loop checks each part of the first array to the second array
    // if the current index of the first loop matches any bart of second it will be removed
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice([i],1);
      }
    }
  }
  return a;
}
