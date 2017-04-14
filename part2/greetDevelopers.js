
function greetDevelopers(list) {
  list.forEach(function(entry) {
    entry.greeting = `Hi ${entry.firstName}, what do you like the most about ${entry.language}?`;
  });
  return list;
}
