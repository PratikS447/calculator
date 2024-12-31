const productlist = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchbtn = document.getElementById("Search-btn");
const categorybtn = document.querySelectorAll(".category-btn");

function filterProduct(){
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
    const activeCategory = document.querySelector(".category-btn.active").dataset.category;
    productItems.forEach(item=>{
        const title = item.querySelector("h3").innerText.toLowerCase();

        const category = item.dataset.category;

        if((title.includes(searchValue) || searchValue === "") && (category === activeCategory || activeCategory === "all")){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
}

function setCategory(e){
    categorybtn.forEach(btn=>btn.classList.remove("active"));
        e.target.classList.add("active");
        filterProduct();
    
}

searchbtn.addEventListener("click",filterProduct);
searchInput.addEventListener("keyup",filterProduct);
categorybtn.forEach(btn=>{
    btn.addEventListener("click",setCategory);
})

filterProduct();