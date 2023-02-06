var arr=[
    {class:"airpods", class2:"ap", img:"airpods.jpeg", header:"Airpods Pro", info:"Wireless Noise Cancelling Earphones AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.", coast:"24900"},
    {class:"applewatch", class2:"aw", img:"applewatch.png", header:"Apple Watch", info:"You’ve never seen a watch like this The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.", coast:"40900"},
    {class:"macbook", class2:"mb", img:"macbook.png", header:"Macbook Pro", info:"The best for the brightest Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.", coast:"199900"},
    {class:"iphone11pro", class2:"iph", img:"iphone11pro.png", header:"iPhone 11 Pro", info:"Pro cameras. Pro display. Pro performance A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.", coast:"106600"},
    {class:"ipadpro12", class2:"ipd", img:"ipadpro12.png", header:"iPad Pro", info:"Your next computer is not a computer It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.", coast:"71900"}
]

let sum=0;
let total=0;

for (let i = 0; i < arr.length; i++) {
    document.querySelector(".products").innerHTML+=
    `
    <div class="product"><i class="fa-solid fa-apple-whole"></i> <span>In Stock</span> <img class="${arr[i].class}" src="${arr[i].img}" alt="">
            <div class="info"><h1>${arr[i].header}</h1><p>${arr[i].info}</p><span>₹ ${arr[i].coast}</span> <button onclick="add(${i})">ADD</button><i class="fa-solid fa-heart-pulse"></i></div></div>
    `    
}
document.querySelector(".clear").addEventListener("click", function(){
    sum=0;
    total = 0.00;
    document.querySelector(".number").innerText=`${sum}`
    document.querySelector(".total").innerHTML="Total: ₹ "+ total+".00/-"

    document.querySelector(".cart-item").innerHTML=""
    document.querySelector(".notification").style.display="block"
})

document.querySelector("#filter").addEventListener("change", function(){
    console.log(document.querySelector("#filter").value);
    document.querySelectorAll(".product img").forEach(x => {
        if (x.getAttribute("class")==document.querySelector("#filter").value) {
            x.parentElement.style.display="block"
        }else{
            x.parentElement.style.display="none"
        }
        if (document.querySelector("#filter").value=="") {
            
            x.parentElement.style.display="block"
        }
    });
})

function add(i) {
    sum++
    document.querySelector(".number").innerText=`${sum}`
    document.querySelector(".notification").style.display="none"
    document.querySelector(".cart-item").innerHTML+=`
    <div class="items"><img class="${arr[i].class2}" src="${arr[i].img}" alt=""><span class="name">${arr[i].header}</span>
    <span class="num">1</span><span class="cst">₹ ${arr[i].coast}</span><i class="fa-solid fa-trash" onclick="del(this)"></i></div>`
    total +=Number(`${arr[i].coast}`)
    document.querySelector(".total").innerHTML="Total: ₹ "+ total+".00/-"
}

function del(d) {
    console.log(d.parentElement.children[3].innerHTML);
    d.parentElement.remove()
    total-=Number((d.parentElement.children[3].innerHTML).slice(1))
    document.querySelector(".total").innerHTML="Total: ₹ "+ total+".00/-"

    sum--
    document.querySelector(".number").innerText=`${sum}`
    if (sum=="0") {
        document.querySelector(".notification").style.display="block"
    }
}


document.querySelector(".products>i").addEventListener("click", function () {
    document.querySelector(".cartDiv").style.display="block"
    document.querySelector(".products").style.filter="blur(6px)"
})
document.querySelector(".cart-side>i").addEventListener("click", function () {
    document.querySelector(".cartDiv").style.display="none"
    document.querySelector(".products").style.filter="blur(0px)"
})

document.querySelectorAll(".info i").forEach(x => {
    x.addEventListener("click", function(){
        x.classList.toggle("red")
    })
});
