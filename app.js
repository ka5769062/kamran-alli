// Fetching data from API

async function getData() {
  let card = document.getElementById("mainCard");
  card.innerHTML = null;

  let responce = await fetch("https://dummyjson.com/products");
  data = await responce.json();

  // console.log(data)

  // localStorage.setItem('myData', JSON.stringify(data))

  Array.from(data.products).forEach((data, i) => {
    let div = `<div class="card">
    <img src="${data.images[0]}" alt="">
      <span> ${data.title}</span>
     <p>${data.description.slice(0, 10)}</p>
      <b></b>
    <button type="button" class="btn btn-primary" onclick = 'cartNumber(this)'>add To Card</button>
    </div>`;
    card.innerHTML += div;

    // element.getElementsByTagName("img")[0].src = data.products[i].images[0]
    // element.getElementsByTagName("span")[0].innerHTML = data.products[i].title
    // element.getElementsByTagName("p")[0].innerHTML = data.products[i].description.slice(0, 10)
  });
  // cartNumber(data)
}

getData();

// using loop for getting each elemtn of the card and applying the onclick function

// now seting and geting the data from localStorage

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("myData");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumber(self) {
  if (localStorage.key("cart")) {
    var cartlist = []
  }
  var cartlist = JSON.parse(localStorage.getItem("cart"))
  self = self.parentNode.children;
  var cartData = {
    img:self[0],
    title:self[1],
    desc:self[2]
  }
  cartlist.push(cartData);
  console.log(cartlist);
  localStorage.setItem("cart", JSON.stringify(cartlist));
  document.getElementById("cartIcon").innerText = cartlist.length

  //   let productNumbers = localStorage.getItem('myData')
  //   productNumbers = parseInt(productNumbers)

  //   // console.log(typeof(productNumbers))

  //   if (productNumbers) {

  //     // if there is alerady product presnt
  //     localStorage.setItem('myData', productNumbers + 1)
  //     document.querySelector(".cart span").textContent = productNumbers + 1
  //   }

  //   else {

  //     //   if there is none product
  //     localStorage.setItem('myData', 0)
  //     document.querySelector(".cart span").textContent = 1

  //   }

  //  setitems(dat)
}

function setitems(dat) {
  console.log("inside of setitem function");
  console.log("my product is ", dat);
}

onLoadCartNumbers();
