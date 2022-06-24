let wrapperPreloader = document.getElementById('wrapperPreloader')
let leftP = document.getElementById('leftP')
let rightP = document.getElementById('rightP')

function phaseOfLoad1() {
    leftP.style.left = 15 + "%"
    rightP.style.left = -15 + "%"
}
function phaseOfLoad2() {
    leftP.style.left = 25 + "%"
    rightP.style.left = -25 + "%"
}
setTimeout(phaseOfLoad1, 50)
setTimeout(phaseOfLoad2, 1050)
setTimeout(phaseOfLoad1, 2050)
setTimeout(phaseOfLoad2, 3050)
setTimeout(phaseOfLoad1, 4050)




function endOfLoad(){
    wrapperPreloader.style.opacity = 0;
}
setTimeout(endOfLoad, 5050)


function endOfLoad1(){
    wrapperPreloader.style.display = "none"
}
setTimeout(endOfLoad1, 6050)

