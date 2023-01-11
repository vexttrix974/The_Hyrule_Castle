
const rl = require('readline-sync');

export function potions(question:boolean,nb:number,inventory:string[],HP:number,maxHP:number,STR:number){
    let playerHpPots={HP,STR};
    if(inventory[nb - 1] === "Low-Level Potion"){
        playerHpPots.HP += 10;
        if(playerHpPots.HP > maxHP){
            playerHpPots.HP = maxHP
        }
        console.log(`Vous vous etes soigner, Vos HP actuel sont de ${playerHpPots.HP} HP`);
        
    }
    if(inventory[nb - 1] === "Potion"){
        playerHpPots.HP += 15;
        if(playerHpPots.HP > maxHP){
            playerHpPots.HP = maxHP
        }
        console.log(`Vous vous etes soigner, Vos HP actuel sont de ${playerHpPots.HP} HP`);
        
    }
    if(inventory[nb - 1] === "Good Potion"){
        playerHpPots.HP += 20;
        if(playerHpPots.HP > maxHP){
            playerHpPots.HP = maxHP
        }
        console.log(`Vous vous etes soigner, Vos HP actuel sont de ${playerHpPots.HP} HP`);
        
    }
    if(inventory[nb - 1] === "High-Level Potion"){
        playerHpPots.HP += 45;
        if(playerHpPots.HP > maxHP){
            playerHpPots.HP = maxHP
        }
        console.log(`Vous vous etes soigner, Vos HP actuel sont de ${playerHpPots.HP} HP`);
        
    }
    if(inventory[nb - 1] === "Holy Potion"){
        playerHpPots.HP = maxHP;
        console.log(`Vous vous etes soigner, Vos HP actuel sont de ${playerHpPots.HP} HP`);
    }
    return playerHpPots.HP;
}


