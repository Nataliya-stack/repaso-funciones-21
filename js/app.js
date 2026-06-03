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

    if (valorInput.trim() === "") {
        resultadoPromedio.textContent = "Por favor, ingrese números.";
        return;
    }

    const arrayOriginal = valorInput.split(/[\s,]+/).filter(Boolean).map(Number);

    if (arrayOriginal.some(isNaN)) {
        resultadoPromedio.textContent = "Error: ingrese solo números (separados por espacio o coma).";
        return;
    }

    const promedioFinal = obtenerPromedio(arrayOriginal);

    resultadoPromedio.textContent = promedioFinal;

    inputPromedio.value = "";
    inputPromedio.focus();
});
