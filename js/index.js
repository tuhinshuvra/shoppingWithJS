



function cartProductDiplay(cartProduct) {
    const tableBody = document.getElementById('product-list');
    tableBody.innerHTML = null
    let totalCost = 0;
    for (let i = 0; i < cartProduct.length; i++) {
        const productName = cartArray[i].productName;
        const productPrice = cartArray[i].productPrice;


        const productTr = document.createElement('tr');
        productTr.innerHTML = `
        <th>${i + 1}</th>
        <td>${productName}</td>
        <td>${productPrice}</td>`

        tableBody.appendChild(productTr);

        totalCost = totalCost + parseInt(productPrice);
    }

    const totalCostTr = document.createElement('tr');
    totalCostTr.innerHTML = `
    <td> Total Cost: </td>
    <td></td>
    <td> ${totalCost}</td>
    `
    tableBody.appendChild(totalCostTr);
}

const cartArray = [];
function addItem(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: productPrice
    }
    cartArray.push(productObj)
    console.log(cartArray);
    const arryLength = cartArray.length;

    const addedProductNo = document.getElementById('added-product');
    addedProductNo.innerText = arryLength;

    cartProductDiplay(cartArray);
}