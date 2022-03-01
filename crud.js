
let price = document.querySelector(`#price`);
let title = document.querySelector(`#title`);
let taxes = document.querySelector(`#taxes`);
let ads = document.querySelector(`#ads`);
let count = document.querySelector(`#count`);
let category = document.querySelector(`#category`);
let discount = document.querySelector(`#discount`);
let search = document.querySelector(`#search`);
let totalpriceinputs = document.querySelector(`#totalpriceinputs`);
let creat = document.querySelector(`#creat`);
let totalprice = document.getElementById(`totalprice`)
let searchTitle = document.getElementById(`searchTitle`)
let searchCategory = document.getElementById(`searchCategory`)
let deletAll = document.getElementById(`deletAll`)
let numOfAll = document.getElementById(`numOfAll`)
let twobtnsearch = document.getElementById(`twobtnsearch`)
let a = document.getElementById(`ss`)
let continer = []

creat.addEventListener(`click`, function () {
    if (creat.innerHTML == "creat") {
        add();
    }
    else {
        updateFinale(indexofupdat);
        display(continer);
    }
})

//to get values of inputs
function add() {
    valuecontainer = {
        titlev: title.value,
        pricev: price.value,
        taxesv: taxes.value,
        adsv: ads.value,
        countv: count.value,
        discountv: discount.value,
        categoryv: category.value

    }


    //to add many items by count input
    if (valuecontainer.countv > 1) {
        for (let i = 0; i < valuecontainer.countv; i++) {
            continer.push(valuecontainer);
        }
    }
    else {
        continer.push(valuecontainer);

    }
    display(continer);
    numOfAll.innerHTML = continer.length
    clear()

}
//to make the same event for more one element
[document.querySelector('#price'),
document.querySelector('#taxes'),
document.querySelector('#ads'),
document.querySelector('#discount')]
    .forEach(item => {
        item.addEventListener('keyup', function () {
            let result = (+price.value + +taxes.value + +ads.value) - discount.value;
            totalprice.innerHTML = result
        })
    })

//to display our products
function display(selectDisplay) {
    var cartona = '';
    for (var i = 0; i < selectDisplay.length; i++) {
        cartona += `
        <tr>
        <td>${i}</td>
        <td>${selectDisplay[i].titlev}</td>
        <td>${selectDisplay[i].pricev}</td>
        <td>${selectDisplay[i].taxesv}</td>
        <td>${selectDisplay[i].adsv}</td>
        <td>${selectDisplay[i].discountv}</td>
        <td>${selectDisplay[i].countv}</td>
      <td>${selectDisplay[i].categoryv}</td>
      <td><button onclick="updat(${i})"  class=" btn btn-info"  id="updat "> updat</button></td>
      <td > <button onclick="delet(${i})" class=" btn btn-info"  id="delet "> delet</button></td>       
    </tr> `;
    }
    a.innerHTML = cartona
}

//to delet values of inputs
function clear() {
    price.value = "";
    title.value = "";
    taxes.value = "";
    discount.value = "";
    count.value = "";
    ads.value = "";
    category.value = "";
}

function delet(i) {
    continer.splice(i, 1)
    display(continer)
}

deletAll.addEventListener(`click`, function () {
    continer.splice(0, continer.length)
    display(continer)

})

let indexofupdat;
function updat(index) {

    creat.innerHTML = `updat`;
    title.value = continer[index].titlev
    price.value = continer[index].pricev
    taxes.value = continer[index].taxesv
    ads.value = continer[index].adsv
    discount.value = continer[index].discountv
    count.value = continer[index].countv
    category.value = continer[index].categoryv
    indexofupdat = index;
}

function updateFinale(indexofupdat) {

    continer[indexofupdat].titlev = title.value;
    continer[indexofupdat].pricev = price.value;
    continer[indexofupdat].taxesv = taxes.value;
    continer[indexofupdat].adsv = ads.value;
    continer[indexofupdat].discountv = discount.value;
    continer[indexofupdat].countv = count.value;
    continer[indexofupdat].categoryv = category.value;
    creat.innerHTML = 'creat'
}

searchmood = ``;
function typeofsearch(value) {
    if (value == `searchTitle`) {
        searchmood = `searchTitle`;

    }
    else {
        searchmood = `searchCategory`
    };

    console.log(searchmood)

}
function searchfinal(value) {
    if (searchmood == `searchTitle`) {
        let searchProdactbytitle = []
        for (let i = 0; i < continer.length; i++) {
            if (continer[i].titlev.includes(value)) {

                searchProdactbytitle.push(continer[i])
                display(searchProdactbytitle)
            }
        }
    }
    else if (searchmood = `searchCategory`) {
        let searchProdactbycat = []
        for (let i = 0; i < continer.length; i++) {
            if (continer[i].categoryv.includes(value)) {
                searchProdactbycat.push(continer[i])
                display(searchProdactbycat)
            }
        }
    };
}
