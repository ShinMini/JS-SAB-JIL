document.getElementById("moveBtn")?.addEventListener("click", function () {
    const oneBtn = document.getElementById("one");
    const twoBtn = document.getElementById("two");

    if (oneBtn.value == "") {
        oneBtn.value = twoBtn.value;
        twoBtn.value = "";
    }
    else if (twoBtn.value == "") {
        twoBtn.value = oneBtn.value;
        oneBtn.value = "";
    }
})

// 이미지 변경 함수
function changeImg() {
    const imgs = ["forest.jpg", "lake.jpg", "waterfall.jpg", "bee.jpg", "cat.jpg", "dog.jpg", "fox.png", "gannets.jpg"];
    const randNum = Math.floor(Math.random() * 8);
    const nowImg = document.getElementById("discoveryImg");

    nowImg.src = "img/" + imgs[randNum];
}

document.getElementById("changeImg")?.addEventListener("click", changeImg);