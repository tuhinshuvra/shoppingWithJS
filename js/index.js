
function productDisplay(cartedArray) {

    const htmlTag = document.getElementById('product-list');

    htmlTag.innerHTML = null;
    let totalCost = 0
    for (let i = 0; i < cartedArray.length; i++) {
        productName = cartedArray[i].productName;
        productPrice = cartedArray[i].productPrice;

        totalCost = totalCost + parseInt(productPrice);

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        `
        htmlTag.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>Total Cost</td>
        <td></td>
        <td>${totalCost}</td>
        `
    htmlTag.appendChild(tr);

}



const cartedArray = [];
function addItem(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productName, productPrice);

    const productObj = {
        productName: productName,
        productPrice: productPrice,
    }
    // console.log(productObj);

    cartedArray.push(productObj);
    // console.log(cartedArray);

    productDisplay(cartedArray);
}