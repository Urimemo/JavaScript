const a = ["Uri", "Uri", "Cristian", "Bunny"];
const b = [1, 2, 4, 6, 3, 2];
const c = ["MDMA", "Crack", "Snow"];

const fLargoobjetos = array => {
    let largo = new Set(array).size;

    if (largo < array.length) console.log("Mas corto");
    else console.log("Mas largo");
}

fLargoobjetos(a);
fLargoobjetos(b);
fLargoobjetos(c);