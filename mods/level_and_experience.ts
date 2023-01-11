let EXPRequired = 50;
const colors = require("colors");
export function experience(level:number,actualEXP:number,hp:number,str:number,spd:number,res:number,def:number,int:number,mp:number,luck:number){
    let playerLevel = {level,actualEXP,hp,str,spd,res,def,int,mp,luck};
    EXPRequired = 70 + 10*(level - 1);
    let LVLUP:number = level ;
    const two = 2;
    const result = LVLUP * two;;
    if(EXPRequired <= actualEXP){
        playerLevel.level += +1;
        playerLevel.actualEXP = 0;
        playerLevel.hp += Math.round(Math.random() *(8 - 1) +1);
        playerLevel.str += Math.round(Math.random() *(8 - 1) +1);
        playerLevel.spd += Math.round(Math.random() *(8 - 1) +1);
        playerLevel.res += Math.round(Math.random() *(8 - 1) +1);
        playerLevel.def += Math.round(Math.random() *(8 - 1) +1);
        playerLevel.int += Math.round(Math.random() *(8 - 1) +1);
        playerLevel.mp += Math.round(Math.random() *(8 - 1) +1);
        playerLevel.luck += Math.round(Math.random() *(8 - 1) +1);
        console.log(colors.cyan.bold('✨✨✨✨ LEVEL UP ✨✨✨✨\n'))
        console.log(`HP ${hp}     + ${playerLevel.hp - hp}`);
        console.log(`STR ${str}   + ${playerLevel.str - str}`);
        console.log(`SPD ${spd}    + ${playerLevel.spd - spd}`);
        console.log(`RES ${res}     + ${playerLevel.res - res}`);
        console.log(`DEF ${def}     + ${playerLevel.def - def}`);
        console.log(`INT ${int}     + ${playerLevel.int - int}`);
        console.log(`MP ${mp}     + ${playerLevel.mp - mp}`);
        console.log(`LUCK ${luck}   + ${playerLevel.luck - luck}\n`);


    }
    return playerLevel;
}