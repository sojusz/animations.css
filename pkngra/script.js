scrb = 0;
scrg = 0;

function gra(i){
    document.getElementById("wybor" + i);
    score = document.getElementById("score");
    u = document.getElementById("your");
    b = document.getElementById("bot");
    x = Math.floor(3*Math.random())+1;
    pktg = document.getElementById("g")
    pktb = document.getElementById("b")

    if(i==1) {
        u.src = "papier.png"
    }
    else if(i==2) {
        u.src = "kamien.png"
    }
    else {
        u.src = "nozyce.png"
    }

    if(x==1) {
        b.src = "papier.png"
    }
    else if(x==2) {
        b.src = "kamien.png"
    }
    else {
        b.src = "nozyce.png"
    }

    if(i==x) {
        score.innerHTML = "REMIS"
    }
    else if(i==1 && x==2) {
        score.innerHTML = "WYGRALES"
        scrg++;
    }
    else if(i==1 && x==3) {
        score.innerHTML = "PRZEGRALES"
        scrb++;
    }
    else if(i==2 && x==1) {
        score.innerHTML = "PRZEGRALES"
        scrb++;
    }
    else if(i==2 && x==3) {
        score.innerHTML = "WYGRALES"
        scrg++;
    }
    else if(i==3 && x==1) {
        score.innerHTML = "WYGRALES"
        scrg++;
    }
    else if(i==3 && x==2) {
        score.innerHTML = "PRZEGRALES"
        scrb++;
    }

    pktb.innerHTML = "punkty bota: " + scrb
    pktg.innerHTML = "punkty gracza: " + scrg
}

function zniknij(){
    document.getElementById("ciemnosc").style.width = "0"
    document.getElementById("ciemnosc").innerHTML = ""
}