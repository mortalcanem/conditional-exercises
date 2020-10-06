// Write a function to check for fruit or vegetable:
// Receive an item from the greengrocery

// Fruits: banana, apple, kiwi, cherry, lemon, grapes
// Vegetables: cucumber, pepper, carrot, onion
// Print: "vegetable", "fruit" or "unknown"


function fruitOrVegetable(product) {
  switch (product) {
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    // TODO: Implement the other cases
  }
}

//// completed passes homeworkchecker:
function main(product) {  
    switch (product) {  
    case "banana": 
    case "apple": 
    case "kimi":
    case "cherry":
    case "lemon":
    case "grapes":
    console.log("fruit");      
    break;
    case "cucumber":
    case "pepper":  
    case "carrot":
    case "onion":  
    console.log("vegetable");  
    break; 
    default:   
    console.log("not listed");  
    break;  
    }
}
    
main("banana"); 
main("carrot");  
main("turnip");  
