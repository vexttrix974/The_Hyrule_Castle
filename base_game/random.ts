export function random(){
var rarity = Math.random() * 100;
if(rarity < 50){ 
    return rarity = 1;
}
else if(rarity < 80){ 
    return rarity = 2;
}
else if(rarity < 95 ){ 
    return rarity = 3;
}
else if(rarity < 99 ){
    return rarity = 4;
}
else  {
    return rarity = 5;
}

}

