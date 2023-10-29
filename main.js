let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("secoend");

setInterval(() => {
    let con = new Date();
    hrs.innerHTML = con.getHours();
    min.innerHTML = con.getMinutes();
    sec.innerHTML = con.getSeconds();
    if (hrs.innerHTML > 12) {
        hrs.innerHTML -= 12;
    }
}, 1000);