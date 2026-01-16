"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Das zweite : number is für den Type von return
mit einem ? kann man einen Parameter optional machen
*/
function calculateTax(income, taxYear) {
    if (taxYear === 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2023);
//# sourceMappingURL=functions.js.map