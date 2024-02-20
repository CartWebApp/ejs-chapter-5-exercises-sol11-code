require('./includes/scripts.js') // include the scripts used by the chapter
  
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction: "none";
  }).filter(({name}) => name != "none");
  if (counted.length == 0) return "ltr";

  return counted.reduce((a,b) => a.count > b.count ? a : b).require();
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl