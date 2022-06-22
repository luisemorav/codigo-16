let nombre;
let genero;
let edad;
let nota;
let estado;
let notacolor;

nombre = prompt("Coloque su nombre");
genero = prompt("Coloque su género");
edad = Number(prompt("Coloque su edad"));
nota = Number(prompt("Coloque su nota"));

document.write("<p>Nombre: " + nombre + "</p>");
document.write("<p>Género: " + genero + "</p>");
document.write("<p>Edad: " + edad + "</p>");
document.write("<p>Nota: " + nota + "</p>");

document.write("<hr>")

if (nota >= 0 && nota <= 3) {
    estado = "<span class='muy_deficiente'>Muy deficiente</span>";
    notacolor = "<span class='muy_deficiente'>" + nota + "</span>";
} else if (nota > 3 && nota <= 5) {
    estado = "<span class='deficiente'>Deficiente</span>";
    notacolor = "<span class='deficiente'>" + nota + "</span>";
} else if (nota > 5 && nota <= 6) {
    estado = "<span class='suficiente'>Suficiente</span>";
    notacolor = "<span class='suficiente'>" + nota + "</span>";
} else if (nota > 6 && nota <= 7) {
    estado = "<span class='bien'>Bien</span>";
    notacolor = "<span class='bien'>" + nota + "</span>";
} else if (nota > 7 && nota <= 9) {
    estado = "<span class='notable'>Notable</span>"
    notacolor = "<span class='notable'>" + nota + "</span>";
} else if (nota > 9 && nota <= 10) {
    estado = "<span class='sobresaliente'>Sobresaliente</span>"
    notacolor = "<span class='sobresaliente'>" + nota + "</span>";
}

if (genero == "Hombre" && edad > 35) {
    document.write("<p>El Sr. <strong>" + nombre + "</strong> (" + edad + " años) tiene " + notacolor + ". Está " + estado + "</p>");
} else if (genero == "Hombre" && edad <= 35) {
    document.write("<p>El Joven <strong>" + nombre + "</strong> (" + edad + " años) tiene " + notacolor + ". Está " + estado + "</p>");
} else if (genero == "Mujer" && edad > 50) {
    document.write("<p>La Sra. <strong>" + nombre + "</strong> (" + edad + " años) tiene " + notacolor + ". Está " + estado + "</p>");
} else if (genero == "Mujer" && edad <= 50) {
    document.write("<p>La Srta. <strong>" + nombre + "</strong> (" + edad + " años) tiene " + notacolor + ". Está " + estado + "</p>");
}
