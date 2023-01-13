function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

  return `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}
