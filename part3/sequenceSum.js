const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  } else {
    return begin + sequenceSum(begin + step,end, step)
  }
};
