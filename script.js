let buttonJourney = document.getElementById('bJ')
let buttonTravelers = document.getElementById('bT')
let buttonGuide = document.getElementById('bG')
let buttonMazury = document.getElementById('bM')
let buttonCracow = document.getElementById('bC')
let buttonZakopane = document.getElementById('bZ')
let screamer = document.getElementById("screamer")
let screamerJUp = document.getElementById("screamerJUp")
let sec1 = document.getElementById("sec1")
    //////////////////////////////////////////////////////
buttonJourney.onclick = function () {
    buttonJourney.style.background = "#ffc74a";
    buttonTravelers.style.background = "#bdc8d9";
    buttonGuide.style.background = "#bdc8d9";
    buttonJourney.style.color = "white";
    buttonTravelers.style.color = "white";
    buttonGuide.style.color = "white";
    buttonMazury.style.background = "#ebeef4";
    buttonCracow.style.background = "#ebeef4";
    buttonZakopane.style.background = "#ebeef4";
    buttonMazury.style.color = "#bdc8d9";
    buttonCracow.style.color = "#bdc8d9";
    buttonZakopane.style.color = "#bdc8d9";
}
buttonTravelers.onclick = function () {
    buttonJourney.style.background = "#bdc8d9";
    buttonTravelers.style.background = "#ffc74a";
    buttonGuide.style.background = "#bdc8d9";
    buttonJourney.style.color = "white";
    buttonTravelers.style.color = "white";
    buttonGuide.style.color = "white";
    buttonMazury.style.background = "#ebeef4";
    buttonCracow.style.background = "#ebeef4";
    buttonZakopane.style.background = "#ebeef4";
    buttonMazury.style.color = "#bdc8d9";
    buttonCracow.style.color = "#bdc8d9";
    buttonZakopane.style.color = "#bdc8d9";
}
buttonGuide.onclick = function () {
    buttonJourney.style.background = "#bdc8d9";
    buttonTravelers.style.background = "#bdc8d9";
    buttonGuide.style.background = "#ffc74a";
    buttonJourney.style.color = "white";
    buttonTravelers.style.color = "white";
    buttonGuide.style.color = "white";
    buttonMazury.style.background = "#ebeef4";
    buttonCracow.style.background = "#ebeef4";
    buttonZakopane.style.background = "#ebeef4";
    buttonMazury.style.color = "#bdc8d9";
    buttonCracow.style.color = "#bdc8d9";
    buttonZakopane.style.color = "#bdc8d9";
}
buttonMazury.onclick = function () {
    buttonJourney.style.background = "#ebeef4";
    buttonTravelers.style.background = "#ebeef4";
    buttonGuide.style.background = "#ebeef4";
    buttonJourney.style.color = "bdc8d9";
    buttonTravelers.style.color = "bdc8d9";
    buttonGuide.style.color = "bdc8d9";
    buttonMazury.style.background = "#ffc74a";
    buttonCracow.style.background = "#bdc8d9";
    buttonZakopane.style.background = "#bdc8d9";
    buttonMazury.style.color = "white";
    buttonCracow.style.color = "white";
    buttonZakopane.style.color = "white";
}
buttonCracow.onclick = function () {
    buttonJourney.style.background = "#ebeef4";
    buttonTravelers.style.background = "#ebeef4";
    buttonGuide.style.background = "#ebeef4";
    buttonJourney.style.color = "bdc8d9";
    buttonTravelers.style.color = "bdc8d9";
    buttonGuide.style.color = "bdc8d9";
    buttonMazury.style.background = "#bdc8d9";
    buttonCracow.style.background = "#ffc74a";
    buttonZakopane.style.background = "#bdc8d9";
    buttonMazury.style.color = "white";
    buttonCracow.style.color = "white";
    buttonZakopane.style.color = "white";
}
buttonZakopane.onclick = function () {
    buttonJourney.style.background = "#ebeef4";
    buttonTravelers.style.background = "#ebeef4";
    buttonGuide.style.background = "#ebeef4";
    buttonJourney.style.color = "bdc8d9";
    buttonTravelers.style.color = "bdc8d9";
    buttonGuide.style.color = "bdc8d9";
    buttonMazury.style.background = "#bdc8d9";
    buttonCracow.style.background = "#bdc8d9";
    buttonZakopane.style.background = "#ffc74a";
    buttonMazury.style.color = "white";
    buttonCracow.style.color = "white";
    buttonZakopane.style.color = "white";
}
screamer.onclick = function () {
    let rand1per10 = Math.floor(Math.random() * 11);
    console.log(rand1per10)
    if (rand1per10 == 10) {
        screamerJUp.style.display = "block";
        screamerJUp.style.background = 'rgba(0, 0, 0, 0.74)'

        function disVideo() {
            screamerJUp.style.display = 'none'
        }
        setTimeout(disVideo, 14000)
    }
}