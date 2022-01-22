const nombre = "luis"
let edad= 25
const precio = 99.90
const series = [
    "dark",
    "mr roboto",
    "castlevania"
]
const pelis =[
    {
        name: "el efecto mariposa",
        actores:[
            "actor 1",
            "actor 1",
            "actor 1",
            "actor 1"
        ]
    },
    {
        name: "el efecto mariposa",
        actores:[
            "actor 1",
            "actor 1",
            "actor 1",
            "actor 1"
        ]
    }
]

console.log(nombre)
console.log(edad)
console.log(precio)
console.log(series)
console.log(pelis)

edad +=1 //edad ++

console.log(edad)
series.push("la casa de papel") // series[series.legth]= "la casa de papel"

console.log(series)
series.push("alguna serie")
console.log(series)
pelis.push({
    name: "el efecto mariposa",
    actores:[
        "actor 1",
        "actor 1",
        "actor 1",
        "actor 1"
    ]
})
console.log(pelis)


