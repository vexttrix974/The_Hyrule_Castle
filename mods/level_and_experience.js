"use strict";
exports.__esModule = true;
exports.experience = void 0;
var EXPRequired = 50;
var colors = require("colors");
function experience(level, actualEXP, hp, str, spd, res, def, int, mp, luck) {
    var playerLevel = { level: level, actualEXP: actualEXP, hp: hp, str: str, spd: spd, res: res, def: def, int: int, mp: mp, luck: luck };
    EXPRequired = 70 + 10 * (level - 1);
    var LVLUP = level;
    var two = 2;
    var result = LVLUP * two;
    ;
    if (EXPRequired <= actualEXP) {
        playerLevel.level += +1;
        playerLevel.actualEXP = 0;
        playerLevel.hp += Math.round(Math.random() * (8 - 1) + 1);
        playerLevel.str += Math.round(Math.random() * (8 - 1) + 1);
        playerLevel.spd += Math.round(Math.random() * (8 - 1) + 1);
        playerLevel.res += Math.round(Math.random() * (8 - 1) + 1);
        playerLevel.def += Math.round(Math.random() * (8 - 1) + 1);
        playerLevel.int += Math.round(Math.random() * (8 - 1) + 1);
        playerLevel.mp += Math.round(Math.random() * (8 - 1) + 1);
        playerLevel.luck += Math.round(Math.random() * (8 - 1) + 1);
        console.log(colors.cyan.bold('✨✨✨✨ LEVEL UP ✨✨✨✨\n'));
        console.log("HP ".concat(hp, "     + ").concat(playerLevel.hp - hp));
        console.log("STR ".concat(str, "   + ").concat(playerLevel.str - str));
        console.log("SPD ".concat(spd, "    + ").concat(playerLevel.spd - spd));
        console.log("RES ".concat(res, "     + ").concat(playerLevel.res - res));
        console.log("DEF ".concat(def, "     + ").concat(playerLevel.def - def));
        console.log("INT ".concat(int, "     + ").concat(playerLevel.int - int));
        console.log("MP ".concat(mp, "     + ").concat(playerLevel.mp - mp));
        console.log("LUCK ".concat(luck, "   + ").concat(playerLevel.luck - luck, "\n"));
    }
    return playerLevel;
}
exports.experience = experience;
