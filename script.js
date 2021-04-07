function Hello() {
    (document.getElementById("username").value === "") ? alert('Please, enter your username') : alert('Hello ' + document.getElementById("username").value + '!!!');
}

let canvas = document.getElementById("MyChart");
let erge =  canvas.getContex('2d');
let dataArray = [11, 1, 2, 4, 2, 2];
let MyChart = new Chart(canvas, {
    type: 'pie',
    options:{scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0
                }
            }]
        }},
    data: {
        labels: ['Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King'],
        datasets: [{
            label:[ 'Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King'],
            data: dataArray,
            backgroundColor: [
                'rgba(62, 126, 126, 0.75)',
                'rgba(48, 161, 142, 0.75)',
                'rgba(38, 171, 191, 0.75)',
                'rgba(76, 192, 224, 0.75)',
                'rgba(12, 101, 153, 0.75)',
                'rgba(47, 214, 172, 0.75)',
            ]

        }]
    }
});
let submit_button = document.getElementById('subm');
submit_button.onclick = form_submit;

let form = document.getElementById("main_form");

function form_submit(event) {
    event.preventDefault();
    let usrReg = new RegExp("[a-zA-Z]+");
    username = document.getElementById("username").value;

    if (username.length == 0) {
        alert("Ім'я введи, будь ласка");
        return;
    }
    else if (username.length > 20 || username.length < 2) {
        alert("Нормально ім'я введи");
        return;
    }
    else if(!usrReg.test(username)) {
        alert("Міша, всьо *****, давай по новой");
        return;
    }

    let emReg = new RegExp("[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+");
    email = document.getElementById("email").value;

    if (email.length == 0) {
        alert("Чого пошту не вводиш?");
        return;
    }
    else if(!usrReg.test(email)) {
        alert("Введи пошту нормально, прошу тебе");
        return;
    }

    let pwd = document.getElementById("user-pw").value;
    if (pwd.length == 0) {
        alert("А пароль за тебе хто буде вводити?");
        return;
    } else if (pwd.length < 2 || pwd.length > 15) {
        alert("Будь ласка, нормально введи пароль");
        return;
    }

    form.submit();
}
document.getElementById('timer').innerHTML = '0' + ":" + '20';
startTimer();
colorChange();
function startTimer() {

    let presentTime = document.getElementById('timer').innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<0){
        alert('Твій час минув');
        return}
    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m);
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
}

function colorChange() {
    let presentTime = document.getElementById('timer').innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if(s==59){
        m=m-1
    }
    var el1 = document.getElementsByClassName("ligthcell");
    var el2 = document.getElementsByClassName("darkcell")
    let x1 = getRandomColor();
    let x2 = getRandomColor();
    if(m<0){
        for(var i =0;i<32;i++){
            el1[i].style.background ="#eeeed2";
            el2[i].style.background = "#769656";
        }
        return}
    if(s%4 === 1){
        for(var i =0;i<32;i++){
            el1[i].style.background = x1;
            el2[i].style.background = x2;

        }
    }else if (s%4 === 2){
        for(var i =0;i<32;i++){
            el1[i].style.background = x1;
            el2[i].style.background = x2;

        }
    }else if (s%4 === 3){
        for(var i =0;i<32;i++){
            el1[i].style.background = x1;
            el2[i].style.background = x2;

        }
    }else {
        for(var i =0;i<32;i++){
            el1[i].style.background = x1;
            el2[i].style.background = x2;

        }
    }

    setTimeout(colorChange, 1000);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

