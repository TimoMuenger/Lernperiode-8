"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Wenn man das Keyword const braucht ist der js code besser optimiert
*/
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=enums.js.map