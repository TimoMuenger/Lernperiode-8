function greet(name: string | null | undefined) {
    if (name)//Wenn es einen Namen gibt
    console.log(name.toUpperCase())
    else
    console.log("Hola")
}
greet(undefined)

