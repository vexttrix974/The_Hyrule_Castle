"use strict";
exports.__esModule = true;
exports.potions = void 0;
var rl = require('readline-sync');
function potions(question, nb, inventory, HP, maxHP, STR) {
    var playerHpPots = { HP: HP, STR: STR };
    if (inventory[nb - 1] === "Low-Level Potion") {
        playerHpPots.HP += 10;
        if (playerHpPots.HP > maxHP) {
            playerHpPots.HP = maxHP;
        }
        console.log("Vous vous etes soigner, Vos HP actuel sont de ".concat(playerHpPots.HP, " HP"));
    }
    if (inventory[nb - 1] === "Potion") {
        playerHpPots.HP += 15;
        if (playerHpPots.HP > maxHP) {
            playerHpPots.HP = maxHP;
        }
        console.log("Vous vous etes soigner, Vos HP actuel sont de ".concat(playerHpPots.HP, " HP"));
    }
    if (inventory[nb - 1] === "Good Potion") {
        playerHpPots.HP += 20;
        if (playerHpPots.HP > maxHP) {
            playerHpPots.HP = maxHP;
        }
        console.log("Vous vous etes soigner, Vos HP actuel sont de ".concat(playerHpPots.HP, " HP"));
    }
    if (inventory[nb - 1] === "High-Level Potion") {
        playerHpPots.HP += 45;
        if (playerHpPots.HP > maxHP) {
            playerHpPots.HP = maxHP;
        }
        console.log("Vous vous etes soigner, Vos HP actuel sont de ".concat(playerHpPots.HP, " HP"));
    }
    if (inventory[nb - 1] === "Holy Potion") {
        playerHpPots.HP = maxHP;
        console.log("Vous vous etes soigner, Vos HP actuel sont de ".concat(playerHpPots.HP, " HP"));
    }
    return playerHpPots.HP;
}
exports.potions = potions;
