let inventory:string[] = [];
import {random} from "./random"


export function invetory():string[]{
let itemDropped = Math.random()*100;
if(itemDropped < 50){ 
let item = "Low-Level Potion";
  inventory.push(item);
}
else if(itemDropped < 80){ 
    let item = "Potion";
      inventory.push(item);
}
else if(itemDropped < 95 ){ 
    let item = "Good Potion";
      inventory.push(item);
}
else if(itemDropped < 99 ){
    let item = "High-Level Potion";
      inventory.push(item);
}
else  {
    let item = "Holy Potion"
      inventory.push(item);
}
return inventory;
}