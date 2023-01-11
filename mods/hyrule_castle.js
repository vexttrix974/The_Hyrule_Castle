"use strict";
exports.__esModule = true;
var basic_game_customization_1 = require("./basic_game_customization");
var rl = require('readline-sync');
var fs = require('fs');
var random_1 = require("./random");
var better_combat_options_1 = require("./better_combat_options");
var colors = require('colors');
var more_statistics_1 = require("./more_statistics");
var level_and_experience_1 = require("./level_and_experience");
var inventory_1 = require("./inventory");
var potions_1 = require("./potions");
///////// ECRAN D'ACCEUIL ///////////
var inventory = [];
var level = 1;
var difficulty = 0;
var j = 0;
var difficultostring = (0, basic_game_customization_1.basicgamecustomization)(j);
if (difficultostring === 1) { //choix difficulté
    difficulty = 1;
}
else if (difficultostring === 1.5) {
    difficulty = 1.5;
}
else if (difficultostring === 2) {
    difficulty = 2;
}
j = 1;
var nbretage = (0, basic_game_customization_1.basicgamecustomization)(j);
var etage = Number(nbretage);
//random perso
var rarity = (0, random_1.random)();
var perso = fs.readFileSync("players.json", 'utf-8');
var persoJSON = JSON.parse(perso);
for (var _i = 0, persoJSON_1 = persoJSON; _i < persoJSON_1.length; _i++) {
    var perso_1 = persoJSON_1[_i];
    if (perso_1.rarity === rarity) {
        var perso1 = perso_1;
    }
}
//pop enemies
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
//pop boss
var randomizedboss;
var arrbosses = [];
var bosses = fs.readFileSync('bosses.json', 'utf-8');
var bossesJSON = JSON.parse(bosses);
function randomBoss() {
    var rarityOfBoss = (0, random_1.random)();
    for (var _i = 0, bossesJSON_1 = bossesJSON; _i < bossesJSON_1.length; _i++) {
        var bosses_1 = bossesJSON_1[_i];
        if (bosses_1.rarity === rarityOfBoss) {
            arrbosses.push(bosses_1);
        }
    }
    return randomizedboss = arrbosses[Math.floor(Math.random() * arrbosses.length)];
}
randomizedboss = randomBoss();
//declaration stats
var player = {
    id: perso1.id,
    name: perso1.name,
    HP: perso1.hp,
    mp: perso1.mp,
    STR: perso1.str,
    int: perso1.int,
    def: perso1.def,
    res: perso1.res,
    spd: perso1.spd - 10,
    luck: perso1.luck + 50,
    race: perso1.race,
    "class": perso1["class"],
    rarity: perso1.rarity
};
var enemie = {
    id: randomizedenemie.id,
    name: randomizedenemie.name,
    HP: randomizedenemie.hp * difficulty,
    mp: randomizedenemie.mp * difficulty,
    STR: randomizedenemie.str * difficulty,
    int: randomizedenemie.int * difficulty,
    def: randomizedenemie.def * difficulty,
    res: randomizedenemie.res * difficulty,
    spd: randomizedenemie.spd * difficulty,
    luck: randomizedenemie.luck * difficulty,
    race: randomizedenemie.race,
    "class": randomizedenemie["class"],
    rarity: randomizedenemie.rarity
};
var boss = {
    id: randomizedboss.id,
    name: randomizedboss.name,
    HP: randomizedboss.hp * difficulty,
    mp: randomizedboss.mp * difficulty,
    STR: randomizedboss.str * difficulty,
    int: randomizedboss.int * difficulty,
    def: randomizedboss.def * difficulty,
    res: randomizedboss.res * difficulty,
    spd: randomizedboss.spd * difficulty,
    luck: randomizedboss.luck * difficulty,
    race: randomizedboss.race,
    "class": randomizedboss["class"],
    rarity: randomizedboss.rarity
};
var enemieMAXHP = enemie.HP;
var maxHP = player.HP;
var bossMAXHP = boss.HP;
var money = 12;
var actualEXP = 0;
function lore() {
    console.log(colors.yellow.bold("                   ============Bienvenue Hero !============"));
    console.log(colors.white.bold("             La derniere tache de votre periple approche a sa fin.\n    Il ne vous reste plus qu'a pénétrer dans le chateau et mettre fin au reigne tyranique du", colors.red.bold.underline("Seigneur des mirroirs"), "."));
    console.log(colors.white.bold("         Vous avez sommeiler pendant plus de 100 ans laissant le royaume a l'agonie\n                  et sous le joug de cette abomination.\n     Vous avez dû traversé de nombreuse épreuve pour retrouver votre puissance et vous y êtes efin arrivé."));
    console.log(colors.white.bold("    Dans ce chateau vous y trouver", colors.red.bold.underline("".concat(etage, " etages")), ",enfin des etages...\n     c'est vite dit hero. ce sont des salles, des salles mirroirs pour etre exact.\n       vous y trouverai le même ennemies en boucles jsuqu'a casser tout les mirroirs.\n       Le but etant de vous affaiblir au maximum avant votre grand combat."));
    console.log(colors.white.bold("   Je sais que vous pourrez y arrivez", colors.green.bold.underline("Hero"), ",je crois en vous,le Royaume crois en vous hero."));
    var enterGame = rl.keyInYN(colors.white.bold("                            Etes vous pret hero ?"));
    if (enterGame === true) {
        enterGame;
    }
    else if (enterGame === false) {
        console.log(colors.white.bold("Nous attendrons votre retour enfant de la prophétie."));
        process.exit(1);
    }
}
lore();
var Protected;
///////////////////////////////////////////BOUCLE DE JEU/////////////////////////////////////////////////////////////////////////////////////////////////////
for (var i = 1; i < etage; i += 1) {
    while (enemie.HP > 0 && player.HP > 0) {
        console.log(colors.yellow.bold("======================================\n             FLOOR ".concat(i, "\n====================================== ")));
        console.log(colors.green.bold("".concat(player.name, "    ").concat(player.HP, "HP/").concat(maxHP, "HP LVL").concat(level))); //vie et et nom players 
        console.log(colors.red.bold("\n".concat(enemie.name, "    ").concat(enemie.HP, "HP/").concat(enemieMAXHP, "HP"))); //vie et et nom enemies
        Protected = false;
        var NoAttack = true;
        var firstAttack = true;
        firstAttack = (0, more_statistics_1.morestats)(player.spd, enemie.spd);
        var question = rl.question(colors.white.bold('\n1/Attaque     2/Heal\n3/Escape      4/Protect     \n5/Inventaire  6/Infos\n')).toLowerCase(); //choix action  
        if (question === '6' || question === 'infos') {
            console.log("Les caractéristiques de votre personnages sont les suivants :");
            console.log("Nom : ".concat(player.name));
            console.log("HP : ".concat(maxHP));
            console.log("STR : ".concat(player.STR));
            console.log("SPD : ".concat(player.spd));
            console.log("DEF : ".concat(player.def));
            console.log("MP : ".concat(player.mp));
            console.log("INT : ".concat(player.int));
            console.log("RES : ".concat(player.res));
            console.log("LUCK : ".concat(player.luck));
            NoAttack = false;
        }
        if (question === 'attaque' || question === '1' && firstAttack === true) {
            enemie.HP = attaque(enemie.HP, player.STR, Protected, enemie.def); //influence spd sur le tours 
            console.log("Vous avez attaqu\u00E9");
        }
        if (question === 'heal' || question === '2') {
            player.HP = soins(player.HP, maxHP);
            console.log(colors.brightGreen.bold("Vous vous etes soigné !"));
        }
        if (question === '3' || question === 'escape' || question === '4' || question === 'protect') {
            var combatOption = (0, better_combat_options_1.bettercombatoption)(question, i, maxHP, Protected);
            i = combatOption.i;
            maxHP = combatOption.maxHP;
            Protected = combatOption.Protected;
        }
        if (question === '5' || question === 'inventaire') {
            for (j = 0; j < inventory.length; j += 1) {
                console.log("".concat(j + 1, "- ").concat(inventory[j]));
            }
            var question_1 = rl.keyInYN("Voulez-vous utiliser un objet ?");
            if (question_1 === true) { //inventaire 
                var nb = rl.question("Quel object voulez-vous utiliser ?\n");
                player.HP = (0, potions_1.potions)(question_1, nb, inventory, player.HP, maxHP, enemie.STR);
                inventory.splice(nb - 1, 1);
            }
            if (question_1 === false) {
                player.HP += enemie.STR - 1; //si inventaire non utiliser pas de perte HP
            }
        }
        if (enemie.HP != 0 || firstAttack === false) { //si enemie attaque 1er
            if (NoAttack === true) {
                console.log("".concat(enemie.name, " vous attaque !"));
            }
            var dodge = player.spd - enemie.spd;
            var dodgechance = Math.random() * 100;
            if (dodge >= dodgechance && firstAttack === true) {
                console.log(colors.cyan.bold('Vous avez esquiver le coup ennemis '));
            }
            else if (NoAttack === true) {
                player.HP = attaque(player.HP, enemie.STR, Protected, player.def);
            }
            if (firstAttack === false) { //MECANIQUE DE DODGE
                if (question === 'attaque' || question === '1') {
                    console.log("Vous avez attaqu\u00E9");
                    var dodge_1 = enemie.spd - player.spd;
                    var dodgechance_1 = Math.random() * 100;
                    if (dodge_1 >= dodgechance_1) {
                        console.log(colors.red.bold("L'adversaire a esquivé votre attaque !"));
                    }
                    else {
                        enemie.HP = attaque(enemie.HP, player.STR, Protected, enemie.def);
                    }
                }
                if (question === 'heal' || question === '2') {
                    player.HP = soins(player.HP, maxHP);
                    console.log(colors.brightGreen.bold("Vous vous etes soigné !"));
                }
                if (question === '3' || question === 'escape' || question === '4' || question === 'protect') {
                    var combatOption = (0, better_combat_options_1.bettercombatoption)(question, i, maxHP, Protected);
                    i = combatOption.i;
                    maxHP = combatOption.maxHP;
                    Protected = combatOption.Protected;
                }
                if (question === '5' || question === 'inventaire') {
                    for (j = 0; j < inventory.length; j += 1) {
                        console.log("".concat(j + 1, "- ").concat(inventory[j]));
                    }
                    var question_2 = rl.keyInYN("Voulez-vous utiliser un objet ?");
                    if (question_2 === true) {
                        var nb = rl.question("Quel object voulez-vous utiliser ?\n");
                        player.HP = (0, potions_1.potions)(question_2, nb, inventory, player.HP, maxHP, enemie.STR);
                        inventory.splice(nb - 1, 1);
                    }
                    if (question_2 === false) {
                        player.HP += enemie.STR - 1;
                    }
                }
            }
            if (NoAttack === false) {
            }
            else {
                console.log("Il vous reste : ".concat(player.HP, " HP !"));
                money += 1;
                console.log("Vous possedez ".concat(money, " rubis"));
            }
        }
        else { //mort monstre plus loot item et XP
            actualEXP += Math.random() * (50 - 15) + 15;
            console.log("Vous avez vaincu ".concat(enemie.name));
            var itemDropped = Math.random() * 100;
            if (itemDropped < 35) {
                inventory = (0, inventory_1.invetory)();
                console.log(colors.blue.bold('Vous avez trouver un objet par terre.'));
            }
            var playerLevel = (0, level_and_experience_1.experience)(level, actualEXP, maxHP, player.STR, player.spd, player.res, player.def, player.int, player.mp, player.luck); //fonction lvl et stats up
            level = playerLevel.level;
            actualEXP = playerLevel.actualEXP;
            maxHP = playerLevel.hp;
            player.STR = playerLevel.str;
            player.spd = playerLevel.spd;
            player.res = playerLevel.res;
            player.def = playerLevel.def;
            player.int = playerLevel.int;
            player.mp = playerLevel.mp;
            player.luck = playerLevel.luck;
            //argent
            money += 1;
            console.log("Vous possedez ".concat(money, " rubis"));
        }
    }
    //boss aleatoire apres etage qui fini par 9
    if (i.toString().endsWith('9') && enemie.HP <= 0) {
        enemie.HP = 0;
        randomizedboss = randomBoss();
        var boss_1 = {
            id: randomizedboss.id,
            name: randomizedboss.name,
            HP: randomizedboss.hp * difficulty,
            mp: randomizedboss.mp * difficulty,
            STR: randomizedboss.str * difficulty,
            int: randomizedboss.int * difficulty,
            def: randomizedboss.def * difficulty,
            res: randomizedboss.res * difficulty,
            spd: randomizedboss.spd * difficulty,
            luck: randomizedboss.luck * difficulty,
            race: randomizedboss.race,
            "class": randomizedboss["class"],
            rarity: randomizedboss.rarity
        };
        bossMAXHP = boss_1.HP;
        while (boss_1.HP > 0 && player.HP > 0) { // etage boss
            console.log(colors.yellow.bold(("======================================\n               FLOOR  ".concat(i + 1, "\n====================================== "))));
            console.log(colors.green.bold("".concat(player.name, "    ").concat(player.HP, "HP/").concat(maxHP, "HP LVL").concat(level)));
            console.log(colors.brightMagenta.bold("\n".concat(boss_1.name, "    ").concat(boss_1.HP, "HP/").concat(bossMAXHP, "HP")));
            Protected = false;
            var NoAttack = true;
            var question = rl.question(colors.white.bold('\n1/Attaque     2/Heal\n3/Escape      4/Protect     \n5/Inventaire  6/Infos\n')).toLowerCase(); //choix action
            if (question === 'attaque' || question === '1') {
                boss_1.HP = attaque(boss_1.HP, player.STR, Protected, boss_1.def);
            }
            if (question === 'heal' || question === '2') {
                player.HP = soins(player.HP, maxHP);
                console.log(colors.brightGreen.bold("Vous vous etes soigné !"));
            }
            if (question === '3' || question === 'escape' || question === '4' || question === 'protect') {
                var combatOption = (0, better_combat_options_1.bettercombatoption)(question, i, maxHP, Protected);
                i = combatOption.i;
                maxHP = combatOption.maxHP;
                Protected = combatOption.Protected;
            }
            if (question === '5' || question === 'inventaire') {
                for (j = 0; j < inventory.length; j += 1) {
                    console.log("".concat(j + 1, "- ").concat(inventory[j]));
                }
                var question_3 = rl.keyInYN("Voulez-vous utiliser un objet ?");
                if (question_3 === true) {
                    var nb = rl.question("Quel object voulez-vous utiliser ?\n");
                    player.HP = (0, potions_1.potions)(question_3, nb, inventory, player.HP, maxHP, enemie.STR);
                    inventory.splice(nb - 1, 1);
                }
                if (question_3 === false) {
                    player.HP += enemie.STR - 1;
                }
            }
            if (question === '6' || question === 'infos') {
                console.log("Les caractéristiques de votre personnages sont les suivants :");
                console.log("Nom : ".concat(player.name));
                console.log("HP : ".concat(maxHP));
                console.log("STR : ".concat(player.STR));
                console.log("SPD : ".concat(player.spd));
                console.log("DEF : ".concat(player.def));
                console.log("MP : ".concat(player.mp));
                console.log("INT : ".concat(player.int));
                console.log("RES : ".concat(player.res));
                console.log("LUCK : ".concat(player.luck));
                NoAttack = false;
            }
            //si hp alors attaque
            if (boss_1.HP != 0) {
                if (NoAttack === true) {
                    console.log("".concat(boss_1.name, " vous attaque !"));
                    player.HP = attaque(player.HP, boss_1.STR, Protected, player.def);
                    console.log("Il vous reste : ".concat(player.HP, " HP"));
                }
            }
            else if (boss_1.HP === 0) {
                actualEXP += Math.random() * (50 - 30) + 30; //message win
                console.log('Vous avez battu un des seigneur de la dimmension miroir !');
                money += 1;
                var playerLevel = (0, level_and_experience_1.experience)(level, actualEXP, maxHP, player.STR, player.spd, player.res, player.def, player.int, player.mp, player.luck); //argent et xp loot
                level = playerLevel.level;
                actualEXP = playerLevel.actualEXP;
                maxHP = playerLevel.hp;
                player.STR = playerLevel.str;
                player.spd = playerLevel.spd;
                player.res = playerLevel.res;
                player.def = playerLevel.def;
                player.int = playerLevel.int;
                player.mp = playerLevel.mp;
                player.luck = playerLevel.luck;
            }
        }
        i += 1;
    }
    enemie.HP = enemieMAXHP;
    boss.HP = bossMAXHP;
}
////////////////////////////////FIN DU JEU////////////////////////////
//ecran de Win et Loose
var victory_1 = require("./victory");
var deafeat_1 = require("./deafeat");
if (player.HP === 0) {
    console.log('Vous etes mort.');
    (0, deafeat_1.defeat)();
    process.exit(1);
}
else {
    console.log(colors.rainbow('Felicitation :D'));
    (0, victory_1.victory)();
}
//fonction attque rien a dire 
function attaque(HP, STR, Protected, DEF) {
    var CritRoulettee = Math.random() * 100;
    if (CritRoulettee < player.luck) {
        STR = STR * 2;
        console.log("COUP CRITQUE ".concat(STR, " DEGATS"));
    }
    if (Protected === false) {
        HP -= Math.floor(STR - STR * (DEF / 100));
    }
    else if (Protected === true) {
        HP -= Math.floor((STR - STR * (DEF / 100)) / 2);
        console.log("====", colors.red.bold("MIROIR DE PROTECTION"), "====");
        console.log("Vous avez reduit de moitier les degats de ".concat(enemie.name));
    }
    // blocage des HP a 0 pour evité le neg
    if (HP < 0) {
        return HP = 0;
    }
    else {
        return HP;
    }
}
//blocage hp max et soins 
function soins(HP, maxHP) {
    HP += maxHP / 2;
    if (HP > maxHP) {
        return HP = maxHP;
    }
    else {
        return HP;
    }
}
