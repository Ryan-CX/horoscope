
document.querySelector(".button").addEventListener('click', convert)


function convert() {

    let d = new Date(document.querySelector("#bday").value);
    let day = d.getDate();
    let month = d.getMonth() + 1;

    let astro_sign = document.querySelector(".result").innerText;
    let pic = document.querySelector('.pic');


    if (month == "12") {

        if (day < 22) { astro_sign = "Sagittarius"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "capricorn"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "1") {
        if (day < 20) { astro_sign = "Capricorn"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "aquarius"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "2") {
        if (day < 19) { astro_sign = "Aquarius"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "pisces"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "3") {
        if (day < 21) { astro_sign = "Pisces"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "aries"; pic.src = `${astro_sign}.png` }
    }
    else if (month == "4") {
        if (day < 20) { astro_sign = "Aries"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "taurus"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "5") {
        if (day < 21) { astro_sign = "Taurus"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "gemini"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "6") {
        if (day < 21) { astro_sign = "Gemini"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "cancer"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "7") {
        if (day < 23) { astro_sign = "Cancer"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "leo"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "8") {
        if (day < 23) { astro_sign = "Leo"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "virgo"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "9") {
        if (day < 23) { astro_sign = "Virgo"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "libra"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "10") {
        if (day < 23) { astro_sign = "Libra"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "scorpio"; pic.src = `${astro_sign}.png` }
    }

    else if (month == "11") {
        if (day < 22) { astro_sign = "scorpio"; pic.src = `${astro_sign}.png` }
        else { astro_sign = "sagittarius"; pic.src = `${astro_sign}.png` }
    }

    document.querySelector('.result').innerHTML = ' ' + astro_sign;
}



