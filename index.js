// setInterval(()=>{
//     const date = new Date()
//     const hours = document.getElementById("hour").innerHTML = date.getHours()
//     const minute = document.getElementById("minute").innerHTML = date.getMinutes()
//     const seconds = document.getElementById("second").innerHTML = date.getSeconds()

// })

let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

function displayTime() {
    let date = new Date()

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hRotation = 30 * hh + mm/2 + ss/120;
    let mRotation = 6 * mm + ss/10;
    let sRotation = 6 * ss;

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
}

setInterval(displayTime,1000)
