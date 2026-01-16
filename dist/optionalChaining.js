"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
//if (customer !== null && customer !== undefined)
//console.log(customer.birthday)
//optional property access operator 
console.log(customer?.birthday);
//# sourceMappingURL=optionalChaining.js.map