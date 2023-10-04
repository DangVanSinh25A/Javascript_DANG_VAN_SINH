let myArray =[
    {
        id : 1,
        img: "https://tse3.mm.bing.net/th?id=OIP.6rJv7p9qkKINiwq8aoWd9wAAAA&pid=Api&P=0&h=180",
        product_new: 220,
        product_old: 120,
        name: "Áo nữ siêu cute",
        type: "woment"
    },
    {
        id : 2,
        img: "https://tse3.mm.bing.net/th?id=OIP.6rJv7p9qkKINiwq8aoWd9wAAAA&pid=Api&P=0&h=180",
        product_new: 220,
        product_old: 120,
        name: "Áo nữ siêu cute",
        type: "woment"
    },
    {
        id : 3,
        img: "https://tse3.mm.bing.net/th?id=OIP.6rJv7p9qkKINiwq8aoWd9wAAAA&pid=Api&P=0&h=180",
        product_new: 220,
        product_old: 120,
        name: "Áo nữ siêu cute",
        type: "woment"
    },
    {
        id : 3,
        img: "https://tse3.mm.bing.net/th?id=OIP.6rJv7p9qkKINiwq8aoWd9wAAAA&pid=Api&P=0&h=180",
        product_new: 220,
        product_old: 120,
        name: "Áo nữ siêu cute",
        type: "woment"
    },
    {
        id : 4,
        img: "https://tse2.mm.bing.net/th?id=OIP.qc0ZXZWJ4Yqo9oic0giZngHaHa&pid=Api&P=0&h=180",
        product_new: 220,
        name: "Áo nam siêu ngầu",
        type: "Man"
    },
    {
        id : 5,
        img: "https://tse2.mm.bing.net/th?id=OIP.qc0ZXZWJ4Yqo9oic0giZngHaHa&pid=Api&P=0&h=180",
        product_new: 220,
        name: "Áo nam siêu ngầu",
        type: "Man"
    },
    {
        id : 6,
        img: "https://tse2.mm.bing.net/th?id=OIP.qc0ZXZWJ4Yqo9oic0giZngHaHa&pid=Api&P=0&h=180",
        product_new: 220,
        product_old: 120,
        name: "Áo nam siêu ngầu",
        type: "Man"
    },
    {
        id : 6,
        img: "https://tse2.mm.bing.net/th?id=OIP.qc0ZXZWJ4Yqo9oic0giZngHaHa&pid=Api&P=0&h=180",
        product_new: 220,
        product_old: 120,
        name: "Áo nam siêu ngầu",
        type: "Man"
    }
]
for(let i = 0; i < myArray.length; i++){
    if(myArray[i].type === 'Man'){
    let html =`<div class="col-3">
        <div class = "card" style="width: 18rem;">
        <img src="${myArray[i].img}'" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${myArray[i].name}</h5>
        <p class="card-text">${myArray[i].product_new}</p>
        <a href="#" class="btn btn-primary">Add</a>
    </div>
    </div>  
    </div>
    `
document.getElementById('man').innerHTML += html}
    else{
        let html =`<div class="col-3">
        <div class = "card" style="width: 18rem;">
        <img src="${myArray[i].img}'" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${myArray[i].name}</h5>
        <div style = "display:flex;">
            <p class="card-text" style="width:50px">${myArray[i].product_new}</p>
            <p class="card-text"><del>${myArray[i].product_old}</del></p>
        </div>
        <a href="#" class="btn btn-primary">Add</a>
    </div>
    </div>  
    </div>
    `

    document.getElementById('woment').innerHTML += html
    }
    }