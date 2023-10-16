let shopButton = document.getElementById('shopButton')

shopButton.onclick = function () {
    location.href = './html/shop.html'
}

shopButton.addEventListener("click", () => {
    console.log("1. Click en button");
  });