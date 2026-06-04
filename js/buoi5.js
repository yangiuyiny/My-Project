function inBCC(n) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i} <br>`;
    }
    document.getElementById("result").innerHTML = result;
}
function addItem(name, price, description, link, image) {

    //Tạo thẻ div
    const item = document.createElement("div");//                    <div></div>
    //thêm class cho thẻ div
    item.setAttribute("class", "container-item");//                 <div class="container-item"></div>

    //tạo khung div chứa ảnh (div trong div)
    const containerImage = document.createElement("div");//         <div class="container-item"><div></div></div>
    //thêm class cho khung div chứa ảnh
    containerImage.setAttribute("class", "container-image");

    //tạo hình ảnh
    const imageProduct = document.createElement("img");//           <img>
    imageProduct.setAttribute("src", image);//                      <img src="link">
    imageProduct.setAttribute("alt", name);//                      <img src="link" alt="name">
    imageProduct.setAttribute("class", "image");//                   <img src="link" alt="name" class="image">

    //đưa ảnh vào khung div chứa ảnh
    containerImage.appendChild(imageProduct);

    //tạo khung chứa thông tin sản phẩm (p trong div)
    const containerInfo = document.createElement("div");
    //thêm class cho khung chứa thông tin sản phẩm
    containerInfo.setAttribute("class", "container-info");

    //tạo 4 thẻ p
    const nameProduct = document.createElement("p");
    //đưa tên sản phẩm vào thẻ p
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    //đưa giá sản phẩm vào thẻ p
    priceProduct.innerHTML = price;

    const descriptionProduct = document.createElement("p");
    //đưa mô tả sản phẩm vào thẻ p
    descriptionProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    //đưa link sản phẩm vào thẻ a
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    //đưa 4 thẻ p vào khung chứa thông tin sản phẩm
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descriptionProduct);
    containerInfo.appendChild(linkProduct);

    //đưa khung chứa ảnh và khung chứa thông tin sản phẩm vào thẻ div
    item.appendChild(containerImage);
    item.appendChild(containerInfo);
    document.getElementById("product-list").appendChild(item);
}