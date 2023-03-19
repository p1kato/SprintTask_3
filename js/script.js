let select = document.getElementById("volue");
let valute = document.getElementById("KZT");
let value = document.getElementById("numbers");
let kzt = document.getElementById("KZTvalue");
let usd = document.getElementById("USDvalue");
let eur = document.getElementById("EURvalue");
let a = 0;
let b = 0;
select.addEventListener("click", function (event) {
    event.preventDefault();
    if (select.value == 2) {
        a = value.value;
        b = value.value;
        a = a / 431;
        b = b / 509;
        a = Math.floor(a);
        a = a.toFixed(2);
        b = b.toFixed(2);
        usd.innerHTML = `${a}`;
        eur.innerHTML = `${b}`;
        kzt.innerHTML = "-";
    }
    else if (select.value == 3) {
        b = value.value;
        b = b * 507;
        a = b / 431;
        a = a.toFixed(2);
        b = b.toFixed(2);
        kzt.innerHTML = `${b}`;
        usd.innerHTML = `${a}`;
        eur.innerHTML = "-";
    }
    else if (select.value == 1) {
        a = value.value;
        b = value.value;
        a = a * 429;
        b = a / 509;
        b = b.toFixed(2);
        a = a.toFixed(2);
        kzt.innerHTML = `${a}`;
        eur.innerHTML = `${b}`;
        usd.innerHTML = "-";
    }
});