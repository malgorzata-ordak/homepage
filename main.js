const firstName = "Gosia"
const age = 31

alert ('Cześć! :) Miło Cię widzieć');

console.log( `Siemanko, Siemanko! Witaj na mojej stronie. Prawda, że świetna? :D Jestem ${firstName} i mam ${age} lat`);

const h1 = document.querySelector('.malinowy__h1--js');

h1.innerHTML = 'Siemanko, Siemanko! Witaj na mojej stronie. Prawda, że świetna? :D'

const pustyParagraf = document.querySelector('.pomysł__opis--js');
pustyParagraf.innerHTML = `Ten element został stworzony i uzupełniony za pomocą JS. Jestem z tego bardzo dumna :)`


function greet (firstName, age) {
    console.log (
        `Witaj drogi Gościu. Nazywam się ${firstName} i mam ${age} lat`);
}

greet(firstName, age);

const greetTwo = (firstName, age) => {
console.log (
    `Witaj witaj drogi Gościu. Mam na imię ${firstName} i mam ${age} lat`);

}

greetTwo('Gosia', '31');



