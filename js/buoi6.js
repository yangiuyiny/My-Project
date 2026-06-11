const products = [
    {
        id:"1",
        name: "Mèo trắng",
        price: "200.000đ",
        description: "Một con mèo trắng dễ thương",
        link: "#",
        image: "../assets/images/whitecat.jpg"
    },
    {
        id:"2",
        name: "Mèo tam thể",
        price: "150.000đ",
        description: "Một con mèo tam thể dễ thương",
        link: "#",
        image: "../assets/images/cattamthe.jpg"
    },    
    {
        id:"3",
        name: "Mèo đen",
        price: "100.000đ",
        description: "Một con mèo đen dễ thương",
        link: "#",  
        image: "../assets/images/blackcat.jpg"
    },
    {
        id:"4",
        name: "Mèo cam",
        price: "50.000đ",
        description: "Một con mèo cam dễ thương",
        link: "#",
        image: "../assets/images/orangecat.jpg"
    },

];
function addItemV2(obj) {
    const list = document.getElementById("product-list");
    list.innerHTML += `
    <div class="col">
			<div class="card">
				<img src="${obj.image}" class="card-img-top" alt="${obj.name}">
				<div class="card-body">
					<h5 class="card-title">${obj.name}</h5>
					<p class="card-text">${obj.price}</p>
					<p class="card-text">${obj.description}</p>
					<a href="${obj.link}" class="btn btn-light">Xem chi tiết</a>
				</div>
			</div>
		</div>
    `
}
//Duyệt mảng products và gọi hàm addItemV2 để thêm sản phẩm vào trang
function loadAllProducts(products) {
    for (let i = 0; i < products.length; i++) {
        addItemV2(products[i]);
    }
}