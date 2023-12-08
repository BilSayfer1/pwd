let pwd = 7777;
let vopros;
let chislo = 0;
do {
    vopros = prompt("Введите пароль Далер ака ес что пароль 4 7 ");
    chislo++;
    if (vopros != pwd) {
        if (chislo >= 5) {
            alert('Вы ввели максимальное число попыток. Вернитесь чуть позже');
            break;
        } else {
            alert('Попробуйте ввести символы правильно' + ` ` + chislo);
        }
    } else {
        alert('Верный пароль');
        break;
    }
} while (true);