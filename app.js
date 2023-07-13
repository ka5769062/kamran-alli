// Fetching data from API


async function getData() {
  
  let card = document.querySelectorAll('.card')
  
  
  let responce = await fetch("https://dummyjson.com/products")
  data = await responce.json()
  
  // console.log(data)
  
  // localStorage.setItem('myData', JSON.stringify(data))
  
  card.forEach((element, i) => {
    
    
    element.getElementsByTagName("img")[0].src = data.products[i].images[0]
    element.getElementsByTagName("span")[0].innerHTML = data.products[i].title
    element.getElementsByTagName("p")[0].innerHTML = data.products[i].description.slice(0, 10)
    
    
    cartNumber(data)
  })
  


}

getData() 



// using loop for getting each elemtn of the card and applying the onclick function 
let btn = document.querySelectorAll(".btn-primary")

for (let i = 0; i < btn.length;i++) {

  btn[i].addEventListener("click", () => {

    cartNumber(data[i])
   
  })

}

// now seting and geting the data from localStorage 


function onLoadCartNumbers() {

 
  let productNumbers = localStorage.getItem('myData')

  if (productNumbers) {

    document.querySelector(".cart span").textContent = productNumbers

  }

}

function cartNumber(dat) {
  

  let productNumbers = localStorage.getItem('myData')
  productNumbers = parseInt(productNumbers)

  // console.log(typeof(productNumbers))

  if (productNumbers) {

    // if there is alerady product presnt
    localStorage.setItem('myData', productNumbers + 1)
    document.querySelector(".cart span").textContent = productNumbers + 1
  }

  else {

    //   if there is none product
    localStorage.setItem('myData', 1)
    document.querySelector(".cart span").textContent = 1

  }


 setitems(dat)

}


 function setitems(dat){

console.log("inside of setitem function",)
console.log("my product is ",dat)

 }






onLoadCartNumbers()































