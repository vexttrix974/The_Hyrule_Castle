import { basicgamecustomization } from "./basic_game_customization";

const rl = require('readline-sync');
const fs = require('fs');
import { etrevivant } from "./interfaces";
import { random } from "./random";
import { bettercombatoption } from "./better_combat_options"
var colors = require('colors');
import { morestats } from "./more_statistics"
import  { experience } from "./level_and_experience"
import { invetory } from "./inventory";
import { potions } from "./potions";
///////// ECRAN D'ACCEUIL ///////////
var inventory:string[]=[];
let level = 1;

let difficulty: number = 0;
let j = 0;
let difficultostring = basicgamecustomization(j);

if(difficultostring === 1){         //choix difficulté
    difficulty = 1
    }
    else if(difficultostring === 1.5){
        difficulty = 1.5
        }
    else if(difficultostring === 2 ){
            difficulty = 2
            }



j = 1
const nbretage = basicgamecustomization(j);
const etage = Number(nbretage);






//random perso
let rarity = random();
const perso = fs.readFileSync("players.json", 'utf-8');
const persoJSON = JSON.parse(perso);
for(const perso of persoJSON){
if(perso.rarity ===  rarity){
    var perso1 = perso
    
}
}



//pop enemies
let arrenemie: etrevivant[] =[];
let rarity2 = random();
const enemies = fs.readFileSync("enemies.json", 'utf-8');
const enemiesJSON = JSON.parse(enemies);
for(const enemies of enemiesJSON){
    if(enemies.rarity === rarity2){
       arrenemie.push(enemies);
    }
}

let randomizedenemie = arrenemie[Math.floor(Math.random()*arrenemie.length)];

//pop boss
let randomizedboss:etrevivant;
let arrbosses:etrevivant[] =[];
const bosses = fs.readFileSync('bosses.json', 'utf-8')
const bossesJSON = JSON.parse(bosses);
function randomBoss(){
    let rarityOfBoss = random()
for(const bosses of bossesJSON){
    if(bosses.rarity === rarityOfBoss){
        arrbosses.push(bosses)
    }
}

return randomizedboss = arrbosses[Math.floor(Math.random()*arrbosses.length)];
}

randomizedboss = randomBoss();

//declaration stats
const player = {
    id: perso1.id,
    name: perso1.name,
    HP: perso1.hp,
    mp: perso1.mp,
    STR: perso1.str,
    int: perso1.int,
    def: perso1.def,
    res: perso1.res,
    spd: perso1.spd  -10,
    luck: perso1.luck +50,
    race: perso1.race,
    class:perso1.class,
    rarity: perso1.rarity,
}

const enemie  = {
    id: randomizedenemie.id,
    name: randomizedenemie.name,
    HP: randomizedenemie.hp * difficulty,
    mp: randomizedenemie.mp* difficulty,
    STR: randomizedenemie.str* difficulty,
    int: randomizedenemie.int* difficulty,
    def: randomizedenemie.def* difficulty,
    res: randomizedenemie.res* difficulty,
    spd: randomizedenemie.spd* difficulty,
    luck: randomizedenemie.luck* difficulty,
    race: randomizedenemie.race,
    class:randomizedenemie.class,
    rarity: randomizedenemie.rarity,
}

let boss = {
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
    class:randomizedboss.class,
    rarity: randomizedboss.rarity
}

const enemieMAXHP = enemie.HP;
let maxHP = player.HP;
let bossMAXHP = boss.HP;
let money = 12;
let actualEXP = 0;

function lore(){
    console.log(colors.yellow.bold("                   ============Bienvenue Hero !============"))
    console.log(colors.white.bold("             La derniere tache de votre periple approche a sa fin.\n    Il ne vous reste plus qu'a pénétrer dans le chateau et mettre fin au reigne tyranique du",colors.red.bold.underline("Seigneur des mirroirs"),"."))
    console.log(colors.white.bold("         Vous avez sommeiler pendant plus de 100 ans laissant le royaume a l'agonie\n                  et sous le joug de cette abomination.\n     Vous avez dû traversé de nombreuse épreuve pour retrouver votre puissance et vous y êtes efin arrivé."))
    console.log(colors.white.bold("    Dans ce chateau vous y trouver",colors.red.bold.underline(`${etage} etages`),",enfin des etages...\n     c'est vite dit hero. ce sont des salles, des salles mirroirs pour etre exact.\n       vous y trouverai le même ennemies en boucles jsuqu'a casser tout les mirroirs.\n       Le but etant de vous affaiblir au maximum avant votre grand combat."))
    console.log(colors.white.bold("   Je sais que vous pourrez y arrivez",colors.green.bold.underline("Hero"),",je crois en vous,le Royaume crois en vous hero."))
    const enterGame =rl.keyInYN(colors.white.bold("                            Etes vous pret hero ?"))
if(enterGame === true){
    enterGame}
else if(enterGame === false){
    console.log(colors.white.bold("Nous attendrons votre retour enfant de la prophétie."));
    process.exit(1);
}
}
lore()

var Protected:boolean;


///////////////////////////////////////////BOUCLE DE JEU/////////////////////////////////////////////////////////////////////////////////////////////////////
for(let i = 1; i < etage; i += 1){
while(enemie.HP > 0 &&  player.HP > 0){
    console.log(colors.yellow.bold(`======================================
             FLOOR ${i}
====================================== `));
console.log(colors.green.bold(`${player.name}    ${player.HP}HP/${maxHP}HP LVL${level}`));  //vie et et nom players 
console.log(colors.red.bold(`\n${enemie.name}    ${enemie.HP}HP/${enemieMAXHP}HP`));    //vie et et nom enemies

Protected = false;
let NoAttack = true;
let firstAttack:boolean = true;
firstAttack = morestats(player.spd,enemie.spd);
const question = rl.question(colors.white.bold('\n1/Attaque     2/Heal\n3/Escape      4/Protect     \n5/Inventaire  6/Infos\n')).toLowerCase(); //choix action  
if (question === '6'||question === 'infos'){
    console.log("Les caractéristiques de votre personnages sont les suivants :");
    console.log(`Nom : ${player.name}`);
    console.log(`HP : ${maxHP}`);
    console.log(`STR : ${player.STR}`);
    console.log(`SPD : ${player.spd}`);
    console.log(`DEF : ${player.def}`);
    console.log(`MP : ${player.mp}`);
    console.log(`INT : ${player.int}`);
    console.log(`RES : ${player.res}`);
    console.log(`LUCK : ${player.luck}`);
NoAttack = false;
}
if(question === 'attaque'|| question === '1'&& firstAttack === true){
   enemie.HP = attaque(enemie.HP, player.STR,Protected,enemie.def); //influence spd sur le tours 
   console.log(`Vous avez attaqué`);


}
if(question === 'heal'|| question === '2'){
player.HP = soins(player.HP, maxHP);
console.log(colors.brightGreen.bold("Vous vous etes soigné !"))
}
if(question === '3'|| question === 'escape' ||question === '4' || question === 'protect'){
let combatOption = bettercombatoption(question,i,maxHP,Protected);
i = combatOption.i
maxHP = combatOption.maxHP
Protected = combatOption.Protected;
}
if(question === '5'||question === 'inventaire'){
    for(j=0; j < inventory.length;j+=1){
        console.log(`${j+1}- ${inventory[j]}`);}
        const question = rl.keyInYN(`Voulez-vous utiliser un objet ?`);  
        if(question === true){                                              //inventaire 
        const nb = rl.question(`Quel object voulez-vous utiliser ?\n`);
        player.HP = potions(question,nb,inventory,player.HP,maxHP,enemie.STR);
        inventory.splice(nb -1, 1);
        }
        if(question === false){
        player.HP += enemie.STR - 1;  //si inventaire non utiliser pas de perte HP
        }


}



if(enemie.HP != 0 || firstAttack === false ){            //si enemie attaque 1er
if(NoAttack === true){console.log(`${enemie.name} vous attaque !`);}
const dodge = player.spd - enemie.spd;
const dodgechance = Math.random() * 100;
if(dodge >= dodgechance && firstAttack === true){
    console.log(colors.cyan.bold('Vous avez esquiver le coup ennemis '));
}
else if(NoAttack === true){
player.HP = attaque(player.HP,enemie.STR,Protected,player.def);
}
if(firstAttack === false){ //MECANIQUE DE DODGE
    if(question === 'attaque'|| question === '1'){
        console.log(`Vous avez attaqué`);
        const dodge = enemie.spd - player.spd;
      const dodgechance = Math.random() * 100;
      if(dodge >= dodgechance){
        console.log(colors.red.bold("L'adversaire a esquivé votre attaque !"));
      }
      else{
        enemie.HP = attaque(enemie.HP, player.STR,Protected,enemie.def);
      }
     }
     if(question === 'heal'|| question === '2'){
     player.HP = soins(player.HP, maxHP);
     console.log(colors.brightGreen.bold("Vous vous etes soigné !"))
     }
     if(question === '3'|| question === 'escape' ||question === '4' || question === 'protect'){
     let combatOption = bettercombatoption(question,i,maxHP,Protected);
     i = combatOption.i
     maxHP = combatOption.maxHP
     Protected = combatOption.Protected;
     }
     if(question === '5'||question === 'inventaire'){
        for(j=0; j < inventory.length;j+=1){
            console.log(`${j+1}- ${inventory[j]}`);}
            const question = rl.keyInYN(`Voulez-vous utiliser un objet ?`);  
            if(question === true){
            const nb = rl.question(`Quel object voulez-vous utiliser ?\n`);
            player.HP = potions(question,nb,inventory,player.HP,maxHP,enemie.STR);
            inventory.splice(nb -1, 1);
            }
            if(question === false){
            player.HP += enemie.STR - 1;
            }
    
    
    }
    
}
if(NoAttack === false){

}
else{
console.log(`Il vous reste : ${player.HP} HP !`);
money +=1;
console.log(`Vous possedez ${money} rubis`);
}
}



else{                                                   //mort monstre plus loot item et XP
    actualEXP += Math.random() *(50 - 15) +15 ;
console.log(`Vous avez vaincu ${enemie.name}`);
let itemDropped = Math.random() *100;
if(itemDropped <35 ){
    inventory = invetory();
    console.log(colors.blue.bold('Vous avez trouver un objet par terre.'));
}

let playerLevel = experience(level,actualEXP,maxHP,player.STR,player.spd,player.res,player.def,player.int,player.mp,player.luck);  //fonction lvl et stats up
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

    money +=1;
    console.log(`Vous possedez ${money} rubis`);
}

}

//boss aleatoire apres etage qui fini par 9
if(i.toString().endsWith('9') && enemie.HP <= 0 ){
    enemie.HP = 0;              
    randomizedboss = randomBoss();
    let boss = {
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
        class:randomizedboss.class,
        rarity: randomizedboss.rarity
    }
    bossMAXHP = boss.HP
    while(boss.HP > 0 && player.HP > 0 ){                           // etage boss
        console.log(colors.yellow.bold((`======================================
               FLOOR  ${i + 1}
====================================== `)));
console.log(colors.green.bold(`${player.name}    ${player.HP}HP/${maxHP}HP LVL${level}`));
console.log(colors.brightMagenta.bold(`\n${boss.name}    ${boss.HP}HP/${bossMAXHP}HP`));

Protected = false;
let NoAttack = true;
const question = rl.question(colors.white.bold('\n1/Attaque     2/Heal\n3/Escape      4/Protect     \n5/Inventaire  6/Infos\n')).toLowerCase(); //choix action
    if(question === 'attaque' || question === '1'){
        boss.HP = attaque(boss.HP, player.STR,Protected,boss.def);
     }
     if(question === 'heal' || question === '2'){
        player.HP = soins(player.HP, maxHP);
        console.log(colors.brightGreen.bold("Vous vous etes soigné !"))
        }
        if(question === '3'|| question === 'escape' ||question === '4' || question === 'protect'){
            let combatOption = bettercombatoption(question,i,maxHP,Protected);
            i = combatOption.i
            maxHP = combatOption.maxHP
            Protected = combatOption.Protected;
            }
            if(question === '5'||question === 'inventaire'){
                for(j=0; j < inventory.length;j+=1){
                    console.log(`${j+1}- ${inventory[j]}`);}
                    const question = rl.keyInYN(`Voulez-vous utiliser un objet ?`);  
                    if(question === true){
                    const nb = rl.question(`Quel object voulez-vous utiliser ?\n`);
                    player.HP = potions(question,nb,inventory,player.HP,maxHP,enemie.STR);
                    inventory.splice(nb -1, 1);
                    }
                    if(question === false){
                    player.HP += enemie.STR - 1;
                    }
            
            
            }
            if (question === '6'||question === 'infos'){
                console.log("Les caractéristiques de votre personnages sont les suivants :");
                console.log(`Nom : ${player.name}`);
                console.log(`HP : ${maxHP}`);
                console.log(`STR : ${player.STR}`);
                console.log(`SPD : ${player.spd}`);
                console.log(`DEF : ${player.def}`);
                console.log(`MP : ${player.mp}`);
                console.log(`INT : ${player.int}`);
                console.log(`RES : ${player.res}`);
                console.log(`LUCK : ${player.luck}`);
            NoAttack = false;
            }
        //si hp alors attaque
        if(boss.HP != 0){
            if(NoAttack === true){console.log(`${boss.name} vous attaque !`);
            player.HP = attaque(player.HP,boss.STR,Protected,player.def)
            console.log(`Il vous reste : ${player.HP} HP`);}
            }
            else if(boss.HP === 0){
                actualEXP += Math.random() *(50 - 30) +30 ;         //message win
                console.log('Vous avez battu un des seigneur de la dimmension miroir !');

money +=1;
let playerLevel = experience(level,actualEXP,maxHP,player.STR,player.spd,player.res,player.def,player.int,player.mp,player.luck); //argent et xp loot
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
        i+=1;
  
}

enemie.HP = enemieMAXHP;
boss.HP = bossMAXHP;
}
////////////////////////////////FIN DU JEU////////////////////////////
//ecran de Win et Loose
import { victory } from "./victory";
import { defeat } from "./deafeat";
if(player.HP === 0){
    console.log('Vous etes mort.');
    defeat()
    process.exit(1);
}
else{
    console.log(colors.rainbow('Felicitation :D'));
    victory();
}

//fonction attque rien a dire 
function attaque(HP:number ,STR:number, Protected:boolean,DEF:number){
let CritRoulettee = Math.random()*100;
if(CritRoulettee < player.luck ){
    STR = STR * 2;
    console.log(`COUP CRITQUE ${STR} DEGATS`);
}
if (Protected === false ){
HP -= Math.floor(STR - STR * (DEF/100));
}
else if(Protected === true){
HP -= Math.floor((STR- STR * (DEF/100))/2);
console.log("====",colors.red.bold("MIROIR DE PROTECTION"),"====");
console.log(`Vous avez reduit de moitier les degats de ${enemie.name}`);
}


// blocage des HP a 0 pour evité le neg
if(HP < 0){
    return HP = 0;
}
else{
    return HP;
}
}

//blocage hp max et soins 
function soins(HP:number, maxHP:number){
HP += maxHP /2
if (HP > maxHP){
    return HP = maxHP;
}
else{
    return HP;
}
}