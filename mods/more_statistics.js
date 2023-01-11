"use strict";
exports.__esModule = true;
exports.morestats = void 0;
function morestats(playerSpeed, enemieSpeed) {
    if (playerSpeed > enemieSpeed) {
        return true;
    }
    else {
        return false;
    }
}
exports.morestats = morestats;
