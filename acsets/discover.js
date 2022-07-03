// alert("hello")
const hd = document.getElementsByTagName("header")[0];
let btn_return = document.getElementById("return")
let translateBtnchina = document.getElementById("translate-btn1")
let translateBtnvietnam = document.getElementById("translate-btn2")
let translateBtnjapan = document.getElementById("translate-btn3")
let translateBtnrussia = document.getElementById("translate-btn4")

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        hd.classList.add('header-black');
        // header.classList.remove('')
    } else {
        hd.classList.remove('header-black');
    }
})

btn_return.addEventListener("click", () => {
    window.location.href = "/index.html"
})

translateBtnchina.addEventListener("click", () => {
    document.querySelector("#china .div_discover p").innerHTML = `Yes, my trip was great and I had a great time. The coach and driver are nice and cool. The instructor was very knowledgeable and she told me a lot of things I didn't know. I hope to plan a trip to Xi'an later this year, so will definitely text you again. I really enjoyed the ride, both were very fun and cool.`
})

translateBtnvietnam.addEventListener("click", () => {
    document.querySelector("#vietnam .div_discover p").innerHTML = `The country with smiles, hard-working people, wild and majestic nature, extremely rich cuisine with everything, I am very happy to come to this country.`
})
translateBtnjapan.addEventListener("click", () => {
    document.querySelector("#japan .div_discover p").innerHTML = `Lots of sea, lots of fish and cherry blossoms are very serious countries, but they are very hysterical, and sushi and ramen cannot be ignored in Japan. I went here with my friends and had a great time.`
})
translateBtnrussia.addEventListener("click", () => {
    document.querySelector("#russia .div_discover p").innerHTML = `there is a lot of vodka in vodka, they don't consider vodka to be alcohol but just water. I think it's an interesting thing, they have a lot of ancient architecture and a lot of beautiful forests or lakes. I am quite happy with the trip.`
})