const inputPromedio = document.getElementById("input");
const btnPromedio = document.getElementById("btn");
const resultadoPromedio = document.getElementById("resultado");

const obtenerPromedio = (arrayNumeros) => {
    let sumaTotal = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        sumaTotal = sumaTotal + arrayNumeros[i];
    }

    return sumaTotal / arrayNumeros.length;
};

btnPromedio.addEventListener("click", () => {
    const valorInput = inputPromedio.value;
    let textoResultado = "";

    if (valorInput.trim() === "") {
        textoResultado = "Por favor, ingrese números.";
    } else {
        const arrayOriginal = valorInput.split(/[\s,]+/).filter(Boolean).map(Number);

        if (arrayOriginal.some(isNaN)) {
            textoResultado = "Error: ingrese solo números (separados por espacio o coma).";
        } else {
            const promedioFinal = obtenerPromedio(arrayOriginal);
            textoResultado = promedioFinal; 
        }
    }

    resultadoPromedio.textContent = textoResultado;

    inputPromedio.value = "";
    inputPromedio.focus();
});
