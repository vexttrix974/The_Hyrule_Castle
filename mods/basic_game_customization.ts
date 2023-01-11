import { display } from "./loadScrean";
export function basicgamecustomization(i: number){
const rl = require('readline-sync');
const fs = require('fs');
const colors =require('colors')

let difficulttoreturn: number;

if(i === 0){
    display()
const newgame = rl.question(colors.white.bold("          1.Nouvelle partie       ou       2.Quitter le jeu\n"))
if(newgame === 'Nouvelle partie'|| newgame === '1'){
    let difficulty = rl.question(colors.white.bold('Choissiez une difficulte   \n1/  Normal \n2/  Difficile \n3/  Insane \n')).toLowerCase();
    if(difficulty ==='normal'||difficulty === "1"){
    return 1;
    }
    else if(difficulty ==='difficile'||difficulty === "2"){
        return 1.5;
        }
    else if(difficulty ==='insane'||difficulty === "3"){
            return 2;
            }
}

else if(newgame === 'Quitter le jeu' || newgame === 'Quit' || newgame === '2'){
    console.log('Le jeu se ferme')
    process.exit(1);
}
}
if(i === 1){
   const etages =[10,20,50,100]
let newgame = rl.keyInSelect(etages, colors.white.bold("Selectionnez le nombre d\'etage a affronter"))
return newgame = etages[newgame];
}
}










