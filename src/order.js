// function takeOrder(order1, deliveryOrders) {
//       return deliveryOrders.push(order1);
//     }

function takeOrder(order1, deliveryOrders) {
    if (deliveryOrders.length < 3) {
      return deliveryOrders.push(order1);
    }
}

// function refundOrder(orderNumber, deliveryOrders) {
//    if (deliveryOrders.length > 1) {
//   return deliveryOrders.shift();
//   }
// }

// function refundOrder(orderNumber, deliveryOrders) {
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].orderNumber === orderNumber)
//       return deliveryOrders.splice(deliveryOrders[i], 1);
//   }
// }

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber)
       deliveryOrders.splice(i, 1);
  }
}
// function listItems(order) {
//   return `${order[0].item}, ${order[1].item}, ${order[2].item}`;
// }
function listItems(order) {
  var itemArray = [];
  for (var i = 0; i < order.length; i++) {
     itemArray.push(order[i].item);
  }
  return itemArray.join(", ")
}
// when we call this function it should print us a list of a string that includes
// the item names in their order.

// the next test: when we pass through the functions with the specific parameter of the
// order number, we want it to give us a string of the item name or names.

// function searchOrder(deliveryOrders, item) {
//  for (var i = 0; i < deliveryOrders.length; i++) {
//     return deliveryOrders[i].item === item);
//  }
// }
function searchOrder(deliveryOrders, food) {
  var orderNames = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
       orderNames.push(deliveryOrders[i].item)
  }
   return orderNames.includes(food);
}


// When we call this function with specific arguments passed through we want
// to check if the food item is in the list and return true or false. We declare
// an empty array and a for loop that iterates over the deliveryOrders array. For loop
// pushes item names into empty array for the length of the array. Function returns
// a true or false statement using the .includes array prototype on the new orderNames array with the
// search element of the food item that is passed through in the argument. 

module.exports = {
takeOrder,
refundOrder,
listItems,
searchOrder
}
