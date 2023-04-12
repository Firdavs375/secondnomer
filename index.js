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
    let i = 0
    setInterval(() => {
        time.innerHTML = i;
        let a = 0
        i = a
    })
}

