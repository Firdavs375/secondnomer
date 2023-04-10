// let list = document.querySelector(".list-group")
// let btn = document.querySelector(".btn")


// btn.onclick = () => {
//     if (!list.classList.contains("active")){
//         list.classList.add("active")
//     }else{
//         list.classList.remove("active")
//     }
// }

let time = document.querySelector("h3")
let start = document.querySelector(".btn1")
let stopp = document.querySelector(".btn2")
let reset = document.querySelector(".btn3")
console.log(start);
console.log(stopp);
console.log(reset);


start.onclick = () => {
    if (!reset.classList.contains("btn1"),
        reset.classList.contains("btn2")) {
        reset.classList.remove("btn1")
        reset.classList.remove("btn2")
    } else {
        reset.classList.add("btn1")
        reset.classList.add("btn2")
    }
    let i = 0;
    setInterval(() => {
        time.innerHTML = i;
        let a = 1
        i += a
    }, 1000)
    i++
}
stopp.onclick = () => {
    time = "0"
}

reset.onclick = () => {
    if (!start.classList.contains("btn-primary")) {
        start.classList.remove("btn-primary")
    } else {
        start.classList.add("btn-primary")
    }
    let i = 0;
    setInterval(() => {
        time.innerHTML = i;
        // let a = 1
        // i += a
    })
    // i++
}


