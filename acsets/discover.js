const hd = document.getElementsByTagName("header")[0];

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        hd.classList.add('header-black');
        // header.classList.remove('')
    } else {
        hd.classList.remove('header-black');
    }
})

let btn_return = document.getElementById("return")
btn_return.addEventListener("click", () => {
    window.location.href = "/index.html"
})
