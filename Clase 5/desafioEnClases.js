const generateObject = () => {
    const randomNumbers = [];

    for (let i = 0; i < 10000; i += 1) {
        let number = Math.ceil(Math.random() * 20);  //math.ceil = redondear al entero proximo superior

        randomNumbers.push(number);
    }

    const containerObject = {};

    randomNumbers.forEach((number) => {
        let timesRepeated = randomNumbers.filter((num) => num === number);

        containerObject[number] = timesRepeated.length;
    });

    return containerObject;
};

const object = generateObject();

console.log(object);
