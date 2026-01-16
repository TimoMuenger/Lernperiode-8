/*mit union types kann man Parameter von Funktionen oder Variabels unterschiedliche Typen geben
*/
function kgToLbs(weight: number | string): number
{
//narrowing 
if (typeof weight === "number")
{
    return weight * 2.2
}
else 
{
    return parseInt(weight) * 2.2 
}
}
kgToLbs(10)
kgToLbs("10kg")
