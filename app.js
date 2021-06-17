const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");


function handleMoreBtn(event) {
    moreBtn.classList.toggle("clicked");
    title.classList.toggle("clamp");
}

moreBtn.addEventListener("click", handleMoreBtn);