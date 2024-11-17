export function formatPrice(inputPrice) {
    inputPrice = inputPrice.toString();
    var priceRemainder =  inputPrice.length % 3;
    var formattedPrice = inputPrice.slice(priceRemainder).match(/.{3}/g).join(".");
    if (priceRemainder !== 0) {
        formattedPrice = inputPrice.slice(0, priceRemainder) + "." + formattedPrice;
    }
    return formattedPrice;
}