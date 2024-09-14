let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
    // get items list
    let items = document.querySelectorAll(".item");
    console.log(items);
    console.log(document.querySelector(".slide"));
    document.querySelector(".slide").appendChild(items[1]);
    // console.log(document.querySelector(".slide"));
});
prev.addEventListener("click", function () {
    // get items list
    let items = document.querySelectorAll(".item");
    console.log(items);
    console.log(document.querySelector(".slide"));
    document.querySelector(".slide").prepend(items[items.length - 1]);
    // console.log(document.querySelector(".slide"));
});
