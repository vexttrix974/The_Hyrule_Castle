"use strict";
exports.__esModule = true;
exports.bettercombatoption = void 0;
function bettercombatoption(question, i, maxHP, Protected) {
    var playerStatus = { i: i, maxHP: maxHP, Protected: Protected };
    if (question === 'escape' || question === '3') {
        if (i === 1) {
            playerStatus.i = 1;
        }
        else {
            playerStatus.i -= 1;
        }
        playerStatus.maxHP -= 5;
        console.log('Vous vous etes enfuis vous avez perdu 5 d\'HPMAX et vous etes descendu d\'un etage pour vous refugier');
    }
    if (question === 'protect' || question === '4') {
        playerStatus.Protected = true;
    }
    return playerStatus;
}
exports.bettercombatoption = bettercombatoption;
