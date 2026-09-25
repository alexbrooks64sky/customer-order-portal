const { getOrder, formatOrder } = require('./orders');

console.log('Customer Order Portal v1.1.0');
console.log('================================');

const order = getOrder('100043');

console.log(formatOrder(order));
