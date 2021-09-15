function createNode(child){
    return document.createElement(child);
}
function appendNode(parent,element){
    return parent.appendChild(element);
}
const products=document.getElementById("products");
let url = "http://localhost:5000/products";
fetch (url)
    .then(res => res.json())
    .then(data => {
        return data.map(product => {
            let items=createNode('li')
            items.innerHTML = product.name
            appendNode(products,items)
        })
    }).catch(err=>{
        console.log(err)
    }).catch(function(err){
        console.log(err);
    })
const fruits=document.getElementById("fruList");
let url1 = "http://localhost:5000/products/fruits";
fetch (url1)
    .then(res => res.json())
    .then(data => {
        return data.map(product => {
            let items=createNode('li')
            items.innerHTML = product.name
            appendNode(fruits,items)
        })
    }).catch(err=>{
        console.log(err)
    }).catch(function(err){
        console.log(err);
    })
    const vegList=document.getElementById("vegList");
    let url2 = "http://localhost:5000/products/vegetables";
    fetch (url2)
        .then(res => res.json())
        .then(data => {
            return data.map(product => {
                let items=createNode('li')
                items.innerHTML = product.name
                appendNode(vegList,items)
            })
        }).catch(err=>{
            console.log(err)
        }).catch(function(err){
            console.log(err);
        })

