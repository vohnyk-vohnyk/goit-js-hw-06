function getShippingMessage(country, price, deliveryFee) {

    const totalPrice = price + deliveryFee;
    const message = `Shipping to ${country} will cost ${totalPrice} credits`;
    return message;
}

console.log(getShippingMessage("USA", 1000, 50)); // "Shipping to USA will cost 1050 credits"
console.log(getShippingMessage("Canada", 500, 30)); // "Shipping to Canada will cost 530 credits"
console.log(getShippingMessage("UK", 1500, 70)); // "Shipping to UK will cost 1570 credits"