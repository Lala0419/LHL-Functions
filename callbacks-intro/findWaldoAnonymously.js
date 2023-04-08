const findWaldo = function(names, found) {
 names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  })
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], 
function(index) {
  console.log(index)
});