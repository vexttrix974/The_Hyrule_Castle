"use strict";
exports.__esModule = true;
var rl = require('readline-sync');
var fs = require('fs');
var random_1 = require("./random");
var colors = require('colors');
var rarity = (0, random_1.random)();
var perso = fs.readFileSync("players.json", 'utf-8');
var persoJSON = JSON.parse(perso);
for (var _i = 0, persoJSON_1 = persoJSON; _i < persoJSON_1.length; _i++) {
    var perso_1 = persoJSON_1[_i];
    if (perso_1.rarity === rarity) {
        var perso1 = perso_1;
    }
}
var arrenemie = [];
var rarity2 = (0, random_1.random)();
var enemies = fs.readFileSync("enemies.json", 'utf-8');
var enemiesJSON = JSON.parse(enemies);
for (var _a = 0, enemiesJSON_1 = enemiesJSON; _a < enemiesJSON_1.length; _a++) {
    var enemies_1 = enemiesJSON_1[_a];
    if (enemies_1.rarity === rarity2) {
        arrenemie.push(enemies_1);
    }
}
var randomizedenemie = arrenemie[Math.floor(Math.random() * arrenemie.length)];
var arrbosses = [];
var rarityOfBoss = (0, random_1.random)();
var bosses = fs.readFileSync('bosses.json', 'utf-8');
var bossesJSON = JSON.parse(bosses);
for (var _b = 0, bossesJSON_1 = bossesJSON; _b < bossesJSON_1.length; _b++) {
    var bosses_1 = bossesJSON_1[_b];
    if (bosses_1.rarity === rarityOfBoss) {
        arrbosses.push(bosses_1);
    }
}
var randomizedboss = arrbosses[Math.floor(Math.random() * arrbosses.length)];
var player = {
    id: perso1.id,
    name: perso1.name,
    HP: perso1.hp,
    mp: perso1.mp,
    STR: perso1.str,
    int: perso1.int,
    def: perso1.def,
    res: perso1.res,
    spd: perso1.spd,
    luck: perso1.luck,
    race: perso1.race,
    "class": perso1["class"],
    rarity: perso1.rarity
};
var enemie = {
    id: randomizedenemie.id,
    name: randomizedenemie.name,
    HP: randomizedenemie.hp,
    mp: randomizedenemie.mp,
    STR: randomizedenemie.str,
    int: randomizedenemie.int,
    def: randomizedenemie.def,
    res: randomizedenemie.res,
    spd: randomizedenemie.spd,
    luck: randomizedenemie.luck,
    race: randomizedenemie.race,
    "class": randomizedenemie["class"],
    rarity: randomizedenemie.rarity
};
var boss = {
    id: randomizedboss.id,
    name: randomizedboss.name,
    HP: randomizedboss.hp,
    mp: randomizedboss.mp,
    STR: randomizedboss.str,
    int: randomizedboss.int,
    def: randomizedboss.def,
    res: randomizedboss.res,
    spd: randomizedboss.spd,
    luck: randomizedboss.luck,
    race: randomizedboss.race,
    "class": randomizedboss["class"],
    rarity: randomizedboss.rarity
};
var enemieMAXHP = enemie.HP;
var maxHP = player.HP;
function lore() {
    console.log(colors.yellow.bold("                   ============Bienvenue Hero !============"));
    console.log(colors.white.bold("             La derniere tache de votre periple approche a sa fin.\n    Il ne vous reste plus qu'a pénétrer dans le chateau et mettre fin au reigne tyranique du", colors.red.bold.underline("Seigneur des mirroirs"), "."));
    console.log(colors.white.bold("         Vous avez sommeiler pendant plus de 100 ans laissant le royaume a l'agonie\n                  et sous le joug de cette abomination.\n     Vous avez dû traversé de nombreuse épreuve pour retrouver votre puissance et vous y êtes efin arrivé."));
    console.log(colors.white.bold("    Dans ce chateau vous y trouver", colors.red.bold.underline("etages"), ",enfin des etages...\n     c'est vite dit hero. ce sont des salles, des salles mirroirs pour etre exact.\n       vous y trouverai le même ennemies en boucles jsuqu'a casser tout les mirroirs.\n       Le but etant de vous affaiblir au maximum avant votre grand combat."));
    console.log(colors.white.bold("   Je sais que vous pourrez y arrivez", colors.green.bold.underline("Hero"), ",je crois en vous,le Royaume crois en vous hero."));
    var enterGame = rl.keyInYN(colors.white.bold("                            Etes vous pret hero ?"));
    enterGame;
}
lore();
for (var i = 1; i < 10; i += 1) {
    while (enemie.HP > 0 && player.HP > 0) {
        console.log(colors.yellow.bold("======================================\n                 FLOOR ".concat(i, "\n====================================== ")));
        console.log(colors.green.bold("".concat(player.name, "    ").concat(player.HP, "HP")));
        console.log(colors.red.bold("\n".concat(enemie.name, "    ").concat(enemie.HP, "HP\n")));
        var question = rl.question(colors.white.bold("Attaque ou Heal\n"));
        if (question === 'Attaque') {
            enemie.HP = attaque(enemie.HP, player.STR);
            console.log("Vous avez attaqu\u00E9");
        }
        if (question === 'Heal') {
            player.HP = soins(player.HP, maxHP);
        }
        if (enemie.HP != 0) {
            console.log("".concat(enemie.name, " vous attaque !"));
            player.HP = attaque(player.HP, enemie.STR);
            console.log("Il vous reste : ".concat(player.HP, " HP !"));
        }
    }
    if (i === 9 && enemie.HP <= 0) {
        enemie.HP = 0;
        while (boss.HP > 0 && player.HP > 0) {
            console.log(colors.yellow.bold("======================================\n                FLOOR 10\n====================================== "));
            console.log(colors.green.bold("".concat(player.name, "    ").concat(player.HP, "HP")));
            console.log(colors.red.bold("\n".concat(boss.name, "    ").concat(boss.HP, "HP\n")));
            var question = rl.question(colors.white.bold('Attaque ou Heal\n'));
            if (question === 'Attaque') {
                boss.HP = attaque(boss.HP, player.STR);
            }
            if (question === 'Heal') {
                player.HP = soins(player.HP, maxHP);
            }
            if (boss.HP != 0) {
                console.log("".concat(boss.name, " vous attaque !"));
                player.HP = attaque(player.HP, boss.STR);
                console.log("Il vous reste : ".concat(player.HP, " HP"));
            }
        }
    }
    enemie.HP = enemieMAXHP;
}
if (boss.HP === 0) {
    console.log('Vous avez battu le seigneur des miroirs');
}
function attaque(HP, STR) {
    HP -= STR;
    if (HP < 0) {
        return HP = 0;
    }
    else {
        return HP;
    }
}
function soins(HP, maxHP) {
    HP += maxHP / 2;
    if (HP > maxHP) {
        return HP = maxHP;
    }
    else {
        return HP;
    }
}
