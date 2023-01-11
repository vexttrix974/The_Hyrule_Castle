"use strict";
exports.__esModule = true;
exports.invetory = void 0;
var inventory = [];
function invetory() {
    var itemDropped = Math.random() * 100;
    if (itemDropped < 50) {
        var item = "Low-Level Potion";
        inventory.push(item);
    }
    else if (itemDropped < 80) {
        var item = "Potion";
        inventory.push(item);
    }
    else if (itemDropped < 95) {
        var item = "Good Potion";
        inventory.push(item);
    }
    else if (itemDropped < 99) {
        var item = "High-Level Potion";
        inventory.push(item);
    }
    else {
        var item = "Holy Potion";
        inventory.push(item);
    }
    return inventory;
}
exports.invetory = invetory;
