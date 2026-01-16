"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*mit union types kann man Parameter von Funktionen oder Variabels unterschiedliche Typen geben
*/
function kgToLbs(weight) {
    //narrowing 
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=unionTypes.js.map