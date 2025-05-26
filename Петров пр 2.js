console.log("otgadki");
let otgadki = 0; //счетчик устанавливаем в 0

// первая загадка
const zagadka1 = "висит груша, нельзя скушать?";
const otvet1 = "лампочка";

// задаем первую загадку
const userOtvet1 = prompt(zagadka1);

// проверяем ответ
if (userOtvet1 === otvet1) {
    alert("Верно");
    otgadki = otgadki + 1; // увеличиваем счетчик
} else {
    alert("Неверно");
    alert("Правильный ответ: " + otvet1);
}

// вторая загадка
const zagadka2 = "Зимой и летом одним цветом?";
const otvet2 = "ёлка";

// задаем вторую загадку
const userOtvet2 = prompt(zagadka2);

// проверяем ответ
if (userOtvet2 === otvet2) {
    alert("Верно");
    otgadki = otgadki + 1; // увеличиваем счетчик
} else {
    alert("Неверно");
    alert("Правильный ответ: " + otvet2);
}

// показываем результат
alert("Вы отгадали " + otgadki + " загадки из 2!");
