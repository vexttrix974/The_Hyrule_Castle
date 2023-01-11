const rl = require('readline-sync');
const fs = require('fs');
import { readlinkSync } from "fs";
import { etrevivant } from "./interfaces";
import { random } from "./random";
var colors = require('colors');




let rarity = random();
const perso = fs.readFileSync("players.json", 'utf-8');
const persoJSON = JSON.parse(perso);
for(const perso of persoJSON){
    if(perso.rarity ===  rarity){
        var perso1 = perso
        
    }
}




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



let arrbosses:etrevivant[] =[];
let rarityOfBoss = random();
const bosses = fs.readFileSync('bosses.json', 'utf-8')
const bossesJSON = JSON.parse(bosses);
for(const bosses of bossesJSON){
    if(bosses.rarity === rarityOfBoss){
        arrbosses.push(bosses)
    }
}
let randomizedboss = arrbosses[Math.floor(Math.random()*arrbosses.length)];



const player = {
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
    class:perso1.class,
    rarity: perso1.rarity,
}

const enemie  = {
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
    class:randomizedenemie.class,
    rarity: randomizedenemie.rarity,
}

const boss = {
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
    class:randomizedboss.class,
    rarity: randomizedboss.rarity
}



const enemieMAXHP = enemie.HP;
const maxHP = player.HP;
function lore(){
    console.log(colors.yellow.bold("                   ============Bienvenue Hero !============"))
    console.log(colors.white.bold("             La derniere tache de votre periple approche a sa fin.\n    Il ne vous reste plus qu'a pénétrer dans le chateau et mettre fin au reigne tyranique du",colors.red.bold.underline("Seigneur des mirroirs"),"."))
    console.log(colors.white.bold("         Vous avez sommeiler pendant plus de 100 ans laissant le royaume a l'agonie\n                  et sous le joug de cette abomination.\n     Vous avez dû traversé de nombreuse épreuve pour retrouver votre puissance et vous y êtes efin arrivé."))
    console.log(colors.white.bold("    Dans ce chateau vous y trouver",colors.red.bold.underline(`etages`),",enfin des etages...\n     c'est vite dit hero. ce sont des salles, des salles mirroirs pour etre exact.\n       vous y trouverai le même ennemies en boucles jsuqu'a casser tout les mirroirs.\n       Le but etant de vous affaiblir au maximum avant votre grand combat."))
    console.log(colors.white.bold("   Je sais que vous pourrez y arrivez",colors.green.bold.underline("Hero"),",je crois en vous,le Royaume crois en vous hero."))
    const enterGame =rl.keyInYN(colors.white.bold("                            Etes vous pret hero ?"))
    enterGame
}
lore()


for(let i = 1; i < 10; i += 1){
while(enemie.HP > 0 &&  player.HP > 0){


    console.log(colors.yellow.bold(`======================================
                 FLOOR ${i}
====================================== `));
console.log(colors.green.bold(`${player.name}    ${player.HP}HP`));
console.log(colors.red.bold(`\n${enemie.name}    ${enemie.HP}HP\n`));



const question = rl.question(colors.white.bold("Attaque ou Heal\n"));
if(question === 'Attaque'){
   enemie.HP = attaque(enemie.HP, player.STR);
   console.log(`Vous avez attaqué`);
}
if(question === 'Heal'){
player.HP = soins(player.HP, maxHP);
}

if(enemie.HP != 0){
console.log(`${enemie.name} vous attaque !`);
player.HP = attaque(player.HP,enemie.STR)
console.log(`Il vous reste : ${player.HP} HP !`);
}

}
if(i === 9 && enemie.HP <= 0 ){
    enemie.HP = 0;
    while(boss.HP > 0 && player.HP > 0 ){
    console.log(colors.yellow.bold(`======================================
                FLOOR 10
====================================== `));
    console.log(colors.green.bold(`${player.name}    ${player.HP}HP`));
    console.log(colors.red.bold(`\n${boss.name}    ${boss.HP}HP\n`));



const question = rl.question(colors.white.bold('Attaque ou Heal\n'));
    if(question === 'Attaque'){
        boss.HP = attaque(boss.HP, player.STR);
     }
     if(question === 'Heal'){
        player.HP = soins(player.HP, maxHP);
        }
        if(boss.HP != 0){
            console.log(`${boss.name} vous attaque !`);
            player.HP = attaque(player.HP,boss.STR)
            console.log(`Il vous reste : ${player.HP} HP`);
            }
  
        }
  
}
enemie.HP = enemieMAXHP;

}

if(boss.HP === 0){
    console.log('Vous avez battu le seigneur des miroirs');
}


function attaque(HP:number ,STR:number){
HP -= STR;
if(HP < 0){
    return HP = 0;
}
else{
    return HP;
}
}

function soins(HP:number, maxHP:number){
HP += maxHP /2
if (HP > maxHP){
    return HP = maxHP;
}
else{
    return HP;
}
}