// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
 names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  })
}


// this is our manual forEach() line 3 - 7 
/*/ 
 for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
**/

const actionWhenFound = function(index) {
  console.log(index)
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);