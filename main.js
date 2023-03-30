const categoryList = document.querySelector(".cat-main");
const productList = document.querySelector(".products");

document.addEventListener("DOMContentLoaded", () => {
  //callback function içersinde baska fonksiyon calıstıran fonksiyon

  fetchCategories();
  fetchProducts();
});
// Kategori Olusturma alanı
function fetchCategories() {
  fetch("https://api.escuelajs.co/api/v1/categories")
    //gelen veriyi isleme
    .then((response) => response.json())
    //olusan datayı foreach ile her bir obje icin fonk. calıstırma

    .then((data) =>
      data.slice(0, 4).forEach((Category) => {
        //gelen her bir obje icin  main olusturma
        const categorymain = document.createElement("main");
        //maine class ekleme
        categorymain.classList.add("picture");
        //main icerigini degistirme
        categorymain.innerHTML = `
        <img src="${Category.image}">
        <span>${Category.name}</span> 
        `;
        //olusan categoryi html listesine atama
        categoryList.appendChild(categorymain);
      })
    )
    .catch((err) => console.log(err));
}
// ÜRÜNLERİ ÇEKME
function fetchProducts() {
  // api ye istek atme
  fetch("https://api.escuelajs.co/api/v1/products") //endpoint
    //istek basarili olursa veriyi isle.
    .then((res) => res.json())
    //islenen veriyi al ve ekrana bas
    .then((data) =>
      data.slice(0, 28).forEach((product) => {
        //div olustur.
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        //icerigi degistir.
        productDiv.innerHTML = `
      <img src="${product.images[0]}" alt="">
      <p class="product-title">${product.title} </p>
      <p class="product-category">${product.category.name}</p>
      <div class="Product-action">
          <p>${product.price}$</p>
          <button>Sepete ekle</button>

      </div>
      `;
        //html göndericez
        productList.appendChild(productDiv);
      })
    )
    //hata olursa devreye gir
    .catch();
}
