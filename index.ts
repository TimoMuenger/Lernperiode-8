console.log("Hello, World")
let age: number = 20;
let isAdult: boolean = false;

if(age <= 0 || age >= 100)
{
    console.log("Bist du dir sicher?")
}
else if( age >= 18)
{
    isAdult = true;
    console.log("Du bist erwachsen.");
}
else
{
    console.log("Du bist noch nicht erwachsen.")
}
