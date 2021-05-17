// function createRestaurant(item) {
//   var newRestaurant = {};
//   newRestaurant.name = item;
//   newRestaurant.menus = {};
//   newRestaurant.menus.breakfast = [];
//   newRestaurant.menus.lunch = [];
//   newRestaurant.menus.dinner = [];
//   return newRestaurant;
//
// }

function createRestaurant(item) {
  var newRestaurant = {
    name: item,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
}
return newRestaurant;
}

function addMenuItem(restaurant, food) {
  //create function called addMenuItem that holds two parameters
  //first paraenter will pass variable equal to createRestaurant function which
  //when called returns an object of newRestaurant which holds properties that include
  //name and menus, which holds another object of properties of breakfast, lunch, and dinner
  //that hold empty arrays. Second parameter will pass variable that holds object including
  //properties of name, price, and type.
  if (food.type === "lunch" && !restaurant.menus.lunch.includes(food)) {
    restaurant.menus.lunch.push(food);
    //create if statement with expression that holds condition of the parameter food.type
    //is strictly equal to the string of lunch and does not equal second expression will push
    //food parameter into lunch array.
    } else if (food.type === "dinner" && !restaurant.menus.dinner.includes(food)) {
    restaurant.menus.dinner.push(food);
  } else if (food.type === "breakfast" && !restaurant.menus.breakfast.includes(food)) {
    restaurant.menus.breakfast.push(food);
  }
  return restaurant;
}


function removeMenuItem(restaurant, foodOne, meal) {
  for (var i = 0; i < restaurant.menus[meal].length; i++) {
    restaurant.menus[meal].splice(i, 1);
    return `No one is eating our ${foodOne} - it has been removed from the ${meal} menu!`
  }
  if (!restaurant.menus[meal].includes(foodOne)) {
    return `Sorry, we don't sell ${foodOne}, try adding a new recipe!`
  }
}



module.exports = {
createRestaurant,
addMenuItem,
removeMenuItem
}
