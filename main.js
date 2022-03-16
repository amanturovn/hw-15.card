function products() {
    fetch("products.json")
        .then((res) => {
            return res.json();
        }).then((product) => {
            product.forEach(element => {
                let container = document.querySelector(".container");
                let ul = document.createElement("ul");
                let photo = document.createElement("img");
                let li = document.createElement("li");
                let hr = document.createElement("hr");
                let p = document.createElement("p");
                let desc = document.createElement("p");
                let price = document.createElement("p");
                container.style.display = "flex";
                container.style.flexWrap = "wrap";

                p.style.fontWeight = "bold";

                ul.style.width = "400px";
                ul.style.height = "500px";
                ul.style.listStyle = "none";
                ul.style.background = "white";
                ul.style.border = "1px solid rgb(241, 238, 231)";
                ul.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";
                ul.style.borderRadius = "15px";
                ul.style.margin = "12px";
                ul.style.padding = "10px";

                photo.style.width = "200px";
                photo.style.height = "300px";
                photo.style.objectFit = "contain";

                desc.style.textAlign = "left";

                hr.style.background = "rgb(199, 197, 193)";
                hr.style.boxShadow = "0 0 3px rgba(0,0,0,0.5)";

                photo.getAttribute("src");
                photo.src = element.img;
                p.textContent = element.title;
                desc.textContent = element.desc;
                // p.textContent = element.price;
                container.append(ul);
                ul.append(li)
                li.append(photo);
                li.append(p);
                li.append(hr);
                li.append(desc);
                li.append(price);
            });

        })
}
products()